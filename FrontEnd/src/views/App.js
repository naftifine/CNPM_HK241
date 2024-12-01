import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Navbar from '../components/navbar/navbar';
//import Home from '../components/Home/Home';
//import Hcmut_spso from '../components/hcmut_spso/hcmut_spso';
//import Main_hcmut from '../components/HCMUT/Main_hcmut/Main_hcmut';
//import Main_spso from '../components/SPSO/Main_spso/Main_spso';
//import Infor from '../components/HCMUT/Inforstudent/Infor';
import PrinterManage from '../pages/PrinterManage/printerManage';
import InfoPrinter from '../components/SPSO/InforPrinter/InfoPrinter'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrinterManage />} />
        <Route path="/inforprinter/:printerid" element={<InfoPrinter />} />
      </Routes>
    </Router>

  );
}

export default App;
