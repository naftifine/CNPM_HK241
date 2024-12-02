const moment = require('moment');
const fs = require('fs');
const path = require('path');
const printHistoryModel = require('../models/printModel'); // Import model

const uploadFile = async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  // Lấy thông tin từ request body
  const { 
    student_id, 
    printer_id, 
    number_of_pages, 
    page_size, 
    copies, 
    orientation, 
    sides, 
    normal_margin 
  } = req.body;

  console.log('Request Body:', req.body);

 
  if (!student_id || !printer_id || !number_of_pages || !page_size || !copies || !orientation || !sides || normal_margin === undefined) {
    return res.status(400).send('Missing required fields');
  }

 
  if (isNaN(copies) || copies <= 0) {
    return res.status(400).send('Invalid copies value');
  }
  const validOrientations = ['portrait', 'landscape'];
  const validSides = ['single', 'double'];
  if (!validOrientations.includes(orientation)) {
    return res.status(400).send('Invalid orientation value (must be "portrait" or "landscape")');
  }
  if (!validSides.includes(sides)) {
    return res.status(400).send('Invalid sides value (must be "single" or "double")');
  }

  
  if (normal_margin !== 'true' && normal_margin !== 'false') {
    return res.status(400).send('Invalid normal_margin value (must be "true" or "false")');
  }

  try {
    // Kiểm tra sinh viên id
    const studentResult = await printHistoryModel.getStudentById(student_id);
    if (studentResult.length === 0) {
      return res.status(400).send('Student not found.');
    }

    // Tạo thư mục lưu file nếu chưa tồn tại
    const userFolder = path.join(__dirname, '../uploads', student_id);
    if (!fs.existsSync(userFolder)) {
      fs.mkdirSync(userFolder, { recursive: true });
    }

    // Lưu file vào thư mục của sinh viên
    const filePath = path.join(userFolder, req.file.originalname);
    fs.renameSync(req.file.path, filePath);

    // Lấy time
    const file_name = req.file.originalname;
    const date = moment().format('YYYY-MM-DD');
    const start_time = moment().format('HH:mm:ss');
    const end_time = moment().add(5, 'minutes').format('HH:mm:ss');

    // Kiểm tra máy in id có sẵn sàng k
    const printerResult = await printHistoryModel.getPrinterById(printer_id);
    if (!printerResult.success) {
      return res.status(400).send(printerResult.message);
    }

    const printer = printerResult.printer;

    
    res.status(200).send({
      message: 'File uploaded successfully and logged to print history.',
      fileName: file_name,
      filePath,
      printerInfo: printer,
      number_of_pages,
      page_size,
      copies,
      orientation,
      sides,
      normal_margin: normal_margin === 'true', // Trả về boolean
    });
  } catch (error) {
    console.error('Error processing print request:', error);
    res.status(500).send('Error processing print request');
  }
};

module.exports = { uploadFile };
