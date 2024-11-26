const express = require('express');
const router = express.Router();
const { authHandler } = require('../controllers/authController');

router.get('/login', authHandler);

module.exports = router;
