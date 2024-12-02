const reportModel = require('../models/reportModel');

const getAllReports = (callback) => {
    reportModel.getAllReports((err, results) => {
        if (err) {
            return callback({ status: 500, message: 'Internal server error' }, null);
        }
        callback(null, results);
    });
};

const getReportByMonth = (month, year, callback) => {
    reportModel.getReportByMonth(month, year, (err, results) => {
        if (err) {
            return callback({ status: 500, message: 'Internal server error' }, null);
        }
        if (results.length === 0) {
            return callback({ status: 404, message: 'Không tìm thấy báo cáo cho tháng và năm yêu cầu.' }, null);
        }
        callback(null, results[0]);
    });
};

module.exports = { getAllReports, getReportByMonth };
