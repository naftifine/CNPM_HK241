const authModel = require('../models/authModel');

const login = (bknetid, password, callback) => {
  if (!bknetid || !password) {
    return callback({ status: 400, message: 'bknetid and password are required' }, null);
  }

  authModel.findUserByCredentials(bknetid, password, (err, results) => {
    if (err) {
      return callback({ status: 500, message: 'Internal server error' }, null);
    }

    if (results.length > 0) {
      const { student_id, name } = results[0];
      return callback(null, { success: true, student_id, name });
    } 
    else {
      return callback({ status: 403, message: 'Invalid credentials' }, null);
    }
  });
};

module.exports = { login };
