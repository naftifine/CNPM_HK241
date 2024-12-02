const db = require('../db');

const reportModel = {
    getAllReports: (callback) => {
        const query = 'SELECT * FROM report';
        db.query(query, callback);
    },

    getReportByMonth: (month, year, callback) => {
        const startDate = `${year}-${month}-01`;
        const query = 'SELECT * FROM report WHERE report_date = ?';
        db.query(query, [startDate], callback);
    },
};

module.exports = reportModel;
