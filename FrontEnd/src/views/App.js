import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hcmut_spso from '../pages/Home';
import Main_hcmut from '../pages/Main_hcmut';
import Main_spso from '../pages/Main_spso';
import Inforstudent from '../pages/InforStudent';
import PrinterManage from '../pages/printerManage';
import InfoPrinter from '../pages/InfoPrinter'
import Choose_file from '../pages/choose_file';
import AddPrinter from '../pages/addprinter';
import ManagePrintFormat from '../pages/ManagePrintFormat';
import PrinterHistory from '../pages/PrintHistory';
import AddNewPrinter from '../pages/addprinter';
import Report from '../pages/Report';
import History_print from '../pages/history_print';
import Paymore from '../pages/paymore';
import Bill from '../pages/bill';
import PrintSettings from '../pages/PrintSettings';

function App() {

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Hcmut_spso />} />
        <Route path="/homestudent" element={<Main_hcmut />} />
        <Route path="/profile" element={<Inforstudent />} />
        <Route path="/print" element={< Choose_file />} />
        <Route path="/history" element={<History_print />} />
        <Route path="/homespso" element={<Main_spso />} />
        <Route path="/printmanage" element={<ManagePrintFormat />} />
        <Route path="/printermanage" element={<PrinterManage />} />
        <Route path="/inforprinter/:printerid" element={<InfoPrinter />} />
        <Route path="/addnewprinter" element={<AddPrinter />} />
        <Route path="/printmanage" element={<ManagePrintFormat />} />
        <Route path="/printhistory/:printerid" element={<PrinterHistory />} />
        <Route path="/addnewprinter" element={<AddNewPrinter />} />
        <Route path="/inforprinter/:printerid" element={<InfoPrinter />} />
        <Route path="/report" element={<Report />} />
        <Route path="/printhistory/:printerid" element={<InfoPrinter />} />
        <Route path="/report" element={<Report />} /> */}
        <Route path="/" element={<PrintSettings />} />
      </Routes>
    </Router>
  )
}

export default App;
