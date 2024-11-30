import React, { useEffect, useState } from 'react';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import PrinterManage from './pages/printerManage.js';


function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then((data) => setMessage(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrinterManage/>} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;