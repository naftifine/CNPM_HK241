import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Navbar from '../components/Navbar/Navbar';
//import Home from '../components/Home/Home';
import Hcmut_spso from '../pages/Home';
import Main_hcmut from '../pages/Main_hcmut';
import Main_spso from '../pages/Main_spso';
//import Infor from '../components/HCMUT/Inforstudent/Infor';
import PrinterManage from '../pages/printerManage';
import InfoPrinter from '../pages/InfoPrinter'
import Inforstudent from '../pages/InforStudent';
import Infor from '../pages/InfoPrinter';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hcmut_spso />} />
        <Route path="/homestudent" element={<Main_hcmut />} />
        <Route path="/profile" element={<Inforstudent />} />

        <Route path="/homespso" element={<Main_spso />} />
        <Route path="/printermanage" element={<PrinterManage />} />
        <Route path="/inforprinter/:printerid" element={<InfoPrinter />} />
      </Routes>
    </Router>

  );
}

export default App;
