const moment = require('moment');
const fs = require('fs'); // Module để làm việc với file hệ thống
const path = require('path'); // Module để xử lý đường dẫn
const printHistoryModel = require('../models/printModel'); // Import model

const uploadFile = async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  // Lấy thông tin từ request body
  const { student_id, printer_id, number_of_pages, page_size } = req.body;

  console.log('Request Body:', req.body);

  // Kiểm tra các trường cần thiết
  if (!student_id || !printer_id || !number_of_pages || !page_size) {
    return res.status(400).send('Missing required fields');
  }

  try {
    const studentResult = await printHistoryModel.getStudentById(student_id);
    if (studentResult.length === 0) {
      return res.status(400).send('Student not found.');
    }

    const userFolder = path.join(__dirname, '../uploads', student_id);
    if (!fs.existsSync(userFolder)) {
      fs.mkdirSync(userFolder, { recursive: true });
    }

    const filePath = path.join(userFolder, req.file.originalname);
    fs.renameSync(req.file.path, filePath); 


    const file_name = req.file.originalname;
    const date = moment().format('YYYY-MM-DD');
    const start_time = moment().format('HH:mm:ss');
    const end_time = moment().add(5, 'minutes').format('HH:mm:ss');


    const printerResult = await printHistoryModel.getPrinterById(printer_id);
    if (!printerResult.success) {
      return res.status(400).send(printerResult.message);
    }

    const printer = printerResult.printer;

    const printHistoryResult = await printHistoryModel.savePrintHistory(
      student_id,
      printer.printer_id,
      file_name,
      date,
      start_time,
      end_time,
      number_of_pages,
      page_size
    );

    res.status(200).send({
      message: 'File uploaded successfully and logged to print history.',
      fileName: file_name,
      filePath: filePath, // Đường dẫn file đã lưu
      sectionId: printHistoryResult.insertId,
      printerInfo: printer,
    });
  } catch (error) {
    console.error('Error processing print request:', error);
    res.status(500).send('Error processing print request');
  }
};

module.exports = { uploadFile };
