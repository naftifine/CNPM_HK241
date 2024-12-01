const express = require('express');
const ConfigController = require('../controllers/configController');

const router = express.Router();

router.put('/config/default-pages', ConfigController.updateDefaultPages);

router.put('/config/page-price', ConfigController.updatePagePrice);

module.exports = router;
