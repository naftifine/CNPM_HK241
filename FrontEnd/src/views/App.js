import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Hcmut_spso from '../pages/Home';
import Main_hcmut from '../pages/Main_hcmut';
import Main_spso from '../pages/Main_spso';
import Inforstudent from '../pages/InforStudent';
import PrinterManage from '../pages/printerManage';
import InfoPrinter from '../pages/InfoPrinter'
import Choose_file from '../pages/choose_file';
import AddNewPrinter from '../pages/addprinter';
import Report from '../pages/Report';
function App() {

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Hcmut_spso />} />
        <Route path="/homestudent" element={<Main_hcmut />} />
        <Route path="/profile" element={<Inforstudent />} />
        <Route path="/print" element={<Choose_file />} />
        <Route path="/homespso" element={<Main_spso />} />
        <Route path="/printermanage" element={<PrinterManage />} />
<<<<<<< HEAD
        <Route path="/inforprinter/:printerid" element={<InfoPrinter />} />
        <Route path="/addnewprinter" element={<AddNewPrinter />} />
=======
        <Route path="/inforprinter/:printerid" element={<InfoPrinter />} /> */}
        <Route path="/" element={<Report />} />
      </Routes>
    </Router>
  )
}

export default App;
