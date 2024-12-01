const connection = require('../db'); // Kết nối từ db.js

// Kiểm tra sự tồn tại của sinh viên trong bảng student
const getStudentById = (student_id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      'SELECT * FROM student WHERE student_id = ?',
      [student_id],
      (err, result) => {
        if (err) return reject(err);
        resolve(result);
      }
    );
  });
};

// Kiểm tra máy in dựa trên printer_id và trạng thái sẵn sàng
const getPrinterById = (printer_id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      'SELECT * FROM printer WHERE printer_id = ? AND status = "available"',
      [printer_id],
      (err, result) => {
        if (err) return reject(err);
        if (result.length === 0) {
          return resolve({ success: false, message: "Printer not available or does not exist." });
        }
        resolve({ success: true, printer: result[0] });
      }
    );
  });
};

// Lưu thông tin vào bảng print_history
const savePrintHistory = (
  student_id,
  printer_id,
  file_name,
  date,
  start_time,
  end_time,
  number_of_pages,
  page_size
) => {
  return new Promise((resolve, reject) => {
    const query = `
      INSERT INTO print_history (student_id, printer_id, file_name, date, start_time, end_time, number_of_pages, page_size)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [student_id, printer_id, file_name, date, start_time, end_time, number_of_pages, page_size];
    connection.query(query, values, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

module.exports = {
  getStudentById,
  getPrinterById,
  savePrintHistory,
};
