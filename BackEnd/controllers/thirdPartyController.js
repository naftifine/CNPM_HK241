const connection = require('../db');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const publicKeyPath = path.resolve(__dirname, '../resources/thirdparty/BKpayPublickey.pem'); 
const publicKey = fs.readFileSync(publicKeyPath, 'utf8');
const getPayment = (req, res) => {
  const { student_id, n, signature } = req.body;

  if (!student_id || !n || !signature) {
    return res.status(400).json({ error: 'Student ID, số lượng giấy, và chữ ký số là bắt buộc' });
  }

  const data = JSON.stringify({ student_id, n });

  if (!verifySignature(data, signature)) {
    return res.status(400).json({ error: 'Chữ ký số không hợp lệ' });
  }

  const updateQuery = `
    UPDATE student 
    SET remaining_pages = remaining_pages + ? 
    WHERE student_id = ?
  `;

  const insertPurchaseQuery = `
    INSERT INTO purchase (student_id, number_of_pages, date)
    VALUES (?, ?, NOW())
  `;

  connection.beginTransaction((err) => {
    if (err) {
      console.error('Transaction error:', err);
      return res.status(500).json({ error: 'Lỗi máy chủ nội bộ' });
    }

    connection.query(updateQuery, [n, student_id], (error, results) => {
      if (error) {
        return connection.rollback(() => {
          console.error('Database query error:', error);
          return res.status(500).json({ error: 'Lỗi máy chủ nội bộ' });
        });
      }

      if (results.affectedRows === 0) {
        return connection.rollback(() => {
          return res.status(404).json({ error: 'Không tìm thấy sinh viên với ID này' });
        });
      }

      connection.query(insertPurchaseQuery, [student_id, n], (error, results) => {
        if (error) {
          return connection.rollback(() => {
            console.error('Insert purchase error:', error);
            return res.status(500).json({ error: 'Lỗi máy chủ nội bộ' });
          });
        }

        connection.commit((err) => {
          if (err) {
            return connection.rollback(() => {
              console.error('Commit error:', err);
              return res.status(500).json({ error: 'Lỗi máy chủ nội bộ' });
            });
          }

          return res.status(200).json({ message: 'Cập nhật thành công và thêm hóa đơn thành công' });
        });
      });
    });
  });
};

function verifySignature(data, signature) {
  const verify = crypto.createVerify('SHA256');
  verify.update(data);
  const isVerified = verify.verify(publicKey, signature, 'hex');
  return isVerified;
}

module.exports = { getPayment };
