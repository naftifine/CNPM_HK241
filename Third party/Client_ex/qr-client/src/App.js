import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

// Set the app element for react-modal
Modal.setAppElement('#root');

function App() {
  const [userId, setUserId] = useState('');
  const [amount, setAmount] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3002/get-qr', {
        userId: userId,
        amount: amount,
      });
      if (response.data && response.data.startsWith('data:image/jpeg;base64,')) {
        setQrCode(response.data);
        setModalIsOpen(true);
      } else {
        console.error('Invalid QR code data received:', response.data);
      }
    } catch (error) {
      console.error('There was an error fetching the QR code!', error);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="App">
      <h1>QR Code Payment</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID:</label>
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
        </div>
        <div>
          <label>Amount:</label>
          <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button type="submit">Get QR Code</button>
      </form>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        <h2>Your QR Code:</h2>
        {qrCode ? (
          <img src={qrCode} alt="QR Code" style={imageStyles} />
        ) : (
          <p>Unable to load the QR code image</p>
        )}
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

const imageStyles = {
  maxWidth: '300px', // Adjust the max width to your preference
  maxHeight: '300px', // Adjust the max height to your preference
};

export default App;
