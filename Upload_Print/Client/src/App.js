import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

// Set the app element for react-modal
Modal.setAppElement('#root');

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadResponse, setUploadResponse] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  // const [printSettings, setPrintSettings] = useState({
  //   printer: '',
  //   printAllPages: false,
  //   paperSize: 'Letter',
  //   pages: '',
  //   printOneSided: true,
  //   normalMargins: true,
  //   orientation: 'Portrait',
  //   onePagePerSheet: true,
  //   copies: 1,
  // });

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert('Please select a file to upload!');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:3000/Print', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const uploadedFileName = selectedFile.name;
      setUploadedFiles([...uploadedFiles, uploadedFileName]);
      setUploadResponse(response.data.message || 'File uploaded successfully!');
      setModalIsOpen(true);
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadResponse('There was an error uploading your file. Please try again.');
      setModalIsOpen(true);
    }
  };

  // const handlePrintSettingChange = (e) => {
  //   const { name, value } = e.target;
  //   setPrintSettings((prevSettings) => ({
  //     ...prevSettings,
  //     [name]: value,
  //   }));
  // };

  // const handleCheckboxChange = (e) => {
  //   const { name, checked } = e.target;
  //   setPrintSettings((prevSettings) => ({
  //     ...prevSettings,
  //     [name]: checked,
  //   }));
  // };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="App">
      <form onSubmit={handleUpload}>
        <div>
          <label>Select File:</label>
          <input type="file" onChange={handleFileChange} />
        </div>
        <button type="submit">Tải tệp lên</button>
      </form>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        <h2>Upload Status</h2>
        <p>{uploadResponse}</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
      <div>
        <h2>Các tệp tin đã tải</h2>
        <ul>
          {uploadedFiles.map((file, index) => (
            <li key={index}>{file}</li>
          ))}
        </ul>
      </div>
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

export default App;
