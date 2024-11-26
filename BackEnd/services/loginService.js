require('dotenv').config({ path: '../.env' });

const express = require('express');
const router = express.Router();
const db = require('../db'); 
const jwt = require('jsonwebtoken');


router.get('/login', (req, res) => {
  const { bknetid, password } = req.query;

  if (!bknetid || !password) {
    return res.status(400).json({ error: 'bknetid and password are required' });
  }

  const query = 'SELECT * FROM student WHERE bknetid = ? AND password = ?';
  db.query(query, [bknetid, password], (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (results.length > 0) {
      res.status(200).json({ success: true, message: 'Đăng nhập thành công'});
      // const token = jwt.sign( { bknetid }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
      // res.cookie("token", token, {
      //   httpOnly: true,
      // });
    } 
    else {
      res.status(403).json({ success: false, message: 'Sai BKNetID hoặc mật khẩu' });
    }
  });
});

module.exports = router;
