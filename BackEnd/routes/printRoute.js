// printRoute.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const { uploadFile } = require('../controllers/printController');
const fs = require('fs');


const router = express.Router();


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '../uploads');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true }); 
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const originalName = file.originalname.replace(/[^a-z0-9.-]/gi, '_');
    cb(null, originalName);
  },
});


const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|pdf|doc|docx|xls|xlsx/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);

    if (extname && mimeType) {
      return cb(null, true);
    } else {
      cb(new Error('File type not allowed.'));
    }
  },
  limits: { fileSize: 50 * 1024 * 1024 },
});


router.post('/', upload.single('file'), uploadFile);

module.exports = router;
