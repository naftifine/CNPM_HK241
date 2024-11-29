
import React, { useEffect, useState } from 'react';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import PrinterManage from './pages/printerManage.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

    // <BrowserRouter>
    //   <Routes>
    //     {/* <Route path="/" element={<PrinterManage/>} /> */}

    //   </Routes>
    // </BrowserRouter>

  );
};

export default App;
