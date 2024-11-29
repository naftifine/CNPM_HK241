const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// const db = require("./db");

const authRoutes = require('./routes/authRoute');
const userRoutes = require('./routes/userRoute');

const thirdPartyRoutes = require('./routes/thirdPartyRoute'); 


app.use(cors());

app.get('/login', authRoutes); 
app.get('/info', userRoutes);

app.use(express.json());
app.use('/hcmutSPSS', thirdPartyRoutes); // use -> handle POST, GET,...

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;


