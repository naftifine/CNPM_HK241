const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/info', userController.getUserInfo);

module.exports = router;
