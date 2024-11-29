const authModel = require('../models/authModel');

const login = (bknetid, password, callback) => {
  if (!bknetid || !password) {
    return callback({ status: 400, message: 'Vui lòng nhập BKNetID và mật khẩu.' }, null);
  }

  authModel.findUserByBKNetID(bknetid, password, (err, results) => {
    if (err) {
      return callback({ status: 500, message: 'Internal server error' }, null);
    }

    if (results.length > 0) {
      const { student_id, name } = results[0];
      return callback(null, { success: true, student_id, name });
    } 
    else {
      return callback({ status: 403, message: 'Sai BKNetID hoặc mật khẩu.' }, null);
    }
  });
};

module.exports = { login };
