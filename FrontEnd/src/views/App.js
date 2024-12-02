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
import Payment from '../pages/payment';
import Success from '../pages/success';
import Fail from '../pages/fail';
import LoginSPSO from '../pages/loginSPSO';
import LoginStudent from '../pages/loginStudent'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hcmut_spso />} />
        <Route path="/homestudent/home" element={<Main_hcmut />} />
        <Route path="/profile" element={<Inforstudent />} />
        <Route path="/print" element={< Choose_file />} />
        <Route path="/history" element={<History_print />} />
        <Route path="/homespso/home" element={<Main_spso />} />
        <Route path="/printmanage" element={<ManagePrintFormat />} />
        <Route path="/printermanage" element={<PrinterManage />} />
        <Route path="/inforprinter/:printerid" element={<InfoPrinter />} />
        <Route path="/addnewprinter" element={<AddPrinter />} />
        <Route path="/printmanage" element={<ManagePrintFormat />} />
        <Route path="/printhistory/:printerid" element={<PrinterHistory />} />
        <Route path="/addnewprinter" element={<AddNewPrinter />} />
        <Route path="/inforprinter/:printerid" element={<InfoPrinter />} />
        <Route path="/report" element={<Report />} />
        <Route path="/printsetting/:filename" element={<PrintSettings />} />
        <Route path="/bill/:filename" element={<Bill />} />
        <Route path="/paymore" element={<Paymore />} />
        <Route path="/payment/:numpage" element={<Payment />} />
        <Route path="/payment/success" element={<Success />} />
        <Route path="/payment/fail" element={<Fail />} />
        <Route path="/homestudent" element={<LoginStudent />} />
        <Route path="/homespso" element={<LoginSPSO />} />
      </Routes>
    </Router>
  )
}

export default App;
