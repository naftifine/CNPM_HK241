const db = require('../db');

const authModel = {
  findUserByCredentials: (bknetid, password, callback) => {
    const query = 'SELECT * FROM student WHERE bknetid = ? AND password = ?';
    db.query(query, [bknetid, password], callback);
  },
};

module.exports = authModel;
