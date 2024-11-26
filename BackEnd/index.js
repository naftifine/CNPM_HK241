const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// const db = require("./db");

const authRoutes = require('./routes/authRoute');

app.use(cors());

app.get('/login', authRoutes); 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;


