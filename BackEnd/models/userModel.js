const db = require('../db');

exports.getUserById = (student_id) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM student WHERE student_id = ?';
        db.query(query, [student_id], (err, results) => {
            if (err) return reject(err);
            resolve(results[0] || null);
        });
    });
};

exports.getPrintHistoryByUserId = (student_id) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT number_of_pages, page_size FROM print_history WHERE student_id = ?';
        db.query(query, [student_id], (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};
