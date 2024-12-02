const express = require('express');
const router = express.Router();
const configPrintController = require('../controllers/configPrintController');

// Route to handle print configuration requests
router.post('/configPrint', configPrintController.submitConfigPrintJob);

module.exports = router;
