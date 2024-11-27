const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/get-qr', (req, res) => {
  const { userId, amount } = req.body;
  
  console.log(`Received userId: ${userId}, amount: ${amount}`);
  
  const qrFilePath = path.resolve(__dirname, 'qr-codes', `${userId}.jpg`);
  console.log(`QR file path: ${qrFilePath}`);
  
  if (fs.existsSync(qrFilePath)) {
    fs.readFile(qrFilePath, (err, data) => {
      if (err) {
        return res.status(500).send('Error reading QR code file');
      }
      const base64Image = `data:image/jpeg;base64,${data.toString('base64')}`;
      res.send(base64Image);
    });
  } else {
    console.log('QR code not found');
    res.status(404).send('QR code not found');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
