const express = require('express');
const path = require('path');
const printRoute = require('../BackEnd/routes/printRoute'); 

const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/Print', printRoute);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
