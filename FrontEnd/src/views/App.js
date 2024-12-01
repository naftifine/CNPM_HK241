import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Navbar from '../components/navbar/navbar';
//import Home from '../components/Home/Home';
//import Hcmut_spso from '../components/hcmut_spso/hcmut_spso';
//import Main_hcmut from '../components/HCMUT/Main_hcmut/Main_hcmut';
//import Main_spso from '../components/SPSO/Main_spso/Main_spso';
//import Print from '../pages/printerManage'
//import Infor from '../components/HCMUT/Inforstudent/Infor';
import ChooseFile from '../components/HCMUT/choose_file/choose_file';
function App() {

  return (
    <ChooseFile />
  );
}

export default App;
