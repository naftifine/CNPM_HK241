const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// const db = require("./db");

const authRoutes = require('./routes/authRoute');
const userRoutes = require('./routes/userRoute');

app.use(cors());

app.get('/login', authRoutes); 
app.get('/info', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;


