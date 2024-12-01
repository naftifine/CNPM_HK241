const express = require('express');
const thirdPartyController = require('../controllers/thirdPartyController');

const router = express.Router();

router.post('/pay', thirdPartyController.getPayment);

module.exports = router;
