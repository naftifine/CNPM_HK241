const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const crypto = require('crypto');
const axios = require('axios');
const app = express();
const port = 3002;

//const publicKey = fs.readFileSync('publicKey.pem', 'utf8');
const privateKey = fs.readFileSync('privateKey.pem', 'utf8');

let pendingUpdates = [];

app.use(cors());
app.use(express.json());

app.post('/get-qr', (req, res) => {
  const { userId, amount } = req.body;
  
  if (pendingUpdates.some(update => update.userId === userId)) {
    return res.status(400).send('QR code request for this user is already pending');
  }
  
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
      pendingUpdates.push({ userId, amount });
      console.log(`Pending update added for userId: ${userId}, amount: ${amount}`);
    });
  } else {
    console.log('QR code not found');
    res.status(404).send('QR code not found');
  }
});

function createSignature(data) {
  const sign = crypto.createSign('SHA256');
  sign.update(data).end();
  const signature = sign.sign(privateKey, 'hex');
  return signature;
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  waitForInput();
});

function waitForInput() {
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (input) => {
    const [studentId, amount] = input.trim().split(' ');

    const updateIndex = pendingUpdates.findIndex(update => update.userId === studentId);
    
    if (updateIndex !== -1) {
      const data = JSON.stringify({ student_id: studentId, n: amount });
      const signature = createSignature(data);

      axios.post('http://localhost:3001/hcmutSPSS/pay', {
        student_id: studentId,
        n: amount,
        signature: signature,
      })
      .then(response => {
        console.log(`Update successful for studentId: ${studentId}, response:`, response.data);
        pendingUpdates.splice(updateIndex, 1);
        console.log(`Pending update removed for studentId: ${studentId}`);
      })
      .catch(error => {
        console.error(`Failed to update for studentId: ${studentId}, error:`, error.message);
      });
    } else {
      console.log(`No pending update found for studentId: ${studentId}`);
    }
  });
}
