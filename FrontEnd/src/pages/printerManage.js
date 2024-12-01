import React from 'react';
import style from '../styles/PrinterManage.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../components/SearchBar/SearchBar';
import { useState } from 'react';
import FilterBar from '../components/FilterBar/FilterBar';
import FilterBarTime from '../components/FilterBar/FilterBarTime';
<<<<<<< HEAD
import NavbarSPSO from '../components/Navbar/NavbarSPSO';
=======
import NavbarLogin from '../components/Navbar/NavbarSPSO';
>>>>>>> e7767fe7a7c6a4437cb5d3c2092967427f0f7523
import { useNavigate } from "react-router-dom";

function PrinterBanner({ printerCode, printerName, printerLocation, printerStatus }) {
    const navigate = useNavigate(); // Hook for navigation

    const handleClick = () => {
        navigate(`/inforprinter/${printerCode}`); // Navigate to the URL with printerCode
    };
    return (
        <div className={style.printer__banner} onClick={handleClick} style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faPrint} className={style.printer__icon} />
            <div className={style.printer__details}>
                <p className={style.printer__code}>{printerCode}</p>
                <p className={style.printer__name}>{printerName}</p>
                <p className={style.printer__location}>{printerLocation}</p>
                <p className={`printer-status ${printerStatus === 'Sẵn sàng' ? 'ready' : 'not-ready'}`}>
                    {printerStatus}
                </p>
            </div>
        </div>
    )
}


function PrinterManage() {
    const [displayText, setDisplayText] = useState("");

    return (
        <>
            <NavbarSPSO />
            <FilterBar />
            <SearchBar setDisplayText={setDisplayText} />
            <FilterBarTime />
            <div className={style.printermanage}>
                <PrinterBanner
                    printerCode="555666"
                    printerName="ABCD"
                    printerLocation="Sảnh H6"
                    printerStatus="Sẵn sàng"
                />
                <div className={style.containerButton}>
                    <button className={style.buttonAdd}>Thêm máy in</button>
                </div>
            </div>
        </>

    );
}

export default PrinterManage;
