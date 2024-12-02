const { getAllReports, getReportByMonth } = require('../services/reportService');

const getAllReportsHandler = (req, res) => {
    getAllReports((err, result) => {
        if (err) {
            return res.status(err.status).json({ error: err.message });
        }
        res.status(200).json(result);
    });
};

const getReportByMonthHandler = (req, res) => {
    const { month, year } = req.query;

    if (!month || !year) {
        return res.status(400).json({ error: 'Vui lòng cung cấp tháng và năm.' });
    }

    getReportByMonth(month, year, (err, result) => {
        if (err) {
            return res.status(err.status).json({ error: err.message });
        }
        res.status(200).json(result);
    });
};

module.exports = { getAllReportsHandler, getReportByMonthHandler };
