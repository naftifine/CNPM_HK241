const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// const db = require("./db");

const authRoutes = require('./routes/authRoute');
const userRoutes = require('./routes/userRoute');
const configRoutes = require('./routes/configRoute');

const thirdPartyRoutes = require('./routes/thirdPartyRoute'); 
const reportRoute=require('./routes/reportRoute');
// const configPrintRoute=require('./routes/configPrintRoute');
app.use(cors());
app.use('/reports',reportRoute);
app.get('/login', authRoutes); 
app.get('/profile', userRoutes);
// app.post('/configPrint',configPrintRoute);
app.put('/config/default-pages', configRoutes);
app.put('/config/page-price', configRoutes);

app.use(express.json());
app.use('/hcmutSPSS', thirdPartyRoutes); // use -> handle POST, GET,...

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;


