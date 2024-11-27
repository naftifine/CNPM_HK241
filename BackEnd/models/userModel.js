const db = require('../db');

const getUserById = (student_id, callback) => {
    const query = 'SELECT * FROM student WHERE student_id = ?';
    db.query(query, [student_id], (err, results) => {
        if (err) return callback(err);
        callback(null, results[0] || null);
    });
};

const getPrintHistoryByUserId = (student_id, callback) => {
    const query = 'SELECT number_of_pages, page_size FROM print_history WHERE student_id = ?';
    db.query(query, [student_id], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

module.exports = { getUserById, getPrintHistoryByUserId };
