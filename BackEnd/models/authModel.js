const db = require('../db');

const authModel = {
    findUserByBKNetID: (bknetid, password, callback) => {
        const query = 'SELECT * FROM student WHERE bknetid = ? AND password = ?';
        db.query(query, [bknetid, password], callback);
    },
    updateLastLogin: (bknetid, callback) => {
        const query = `UPDATE student SET last_login = DATE(NOW()) WHERE bknetid = ?`;
        db.query(query, [bknetid], callback);
    },
};

module.exports = authModel;
