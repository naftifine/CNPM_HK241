const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

// GET all reports
router.get('/', reportController.getAllReportsHandler);

// GET report by month and year
// To use this api: {url}/reports/byMonth?month={month}&year={year}
router.get('/byMonth', reportController.getReportByMonthHandler);

module.exports = router;
