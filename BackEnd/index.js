const express = require('express');
const cors = require('cors');
// const mysql = require('mysql');
const app = express();
const PORT = 3001;

const db = require("./db");

app.use(cors());

app.get('/', (req, res) => {
  res.send('nig nig nig nig nig nig nig nig nig nig nig');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



const query = 'SELECT student_id, name, remaining_pages FROM student;';

db.query(query, (err, results) => {
  if (err) {
    console.error('Lỗi khi truy vấn:', err.message);
  } else {
    console.log('Kết quả:', results);
  }
});
