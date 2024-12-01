import React from 'react';
import style from '../styles/PrinterManage.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../components/SearchBar/SearchBar';
import { useState } from 'react';
import FilterBar from '../components/FilterBar/FilterBar';
import FilterBarTime from '../components/FilterBar/FilterBarTime';
import NavbarSPSO from '../components/Navbar/NavbarSPSO';
import { useNavigate } from "react-router-dom";
function PrinterBanner({ printerCode, printerName, printerLocation, printerStatus }) {
    const navigate = useNavigate(); // Hook for navigation

    const handleClick = () => {
        navigate(`/inforprinter/${printerCode}`); // Navigate to the URL with printerCode
    };
    return (
        <div className={style.printer_banner} onClick={handleClick} style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faPrint} className={style.printer__icon} />
            <div className={style.printer_details}>
                <p className={style.printer_code}>{printerCode}</p>
                <p className={style.printer_name}>{printerName}</p>
                <p className={style.printer_location}>{printerLocation}</p>
                <p
                    className={`${style.printer_status} ${printerStatus === 'Sẵn sàng' ? style.ready : style.not_ready
                        }`}
                >
                    {printerStatus}
                </p>
            </div>
        </div>
    )
}


function PrinterManage() {
    const navigate = useNavigate()
    return (
        <>
            <NavbarSPSO />
            <FilterBar />
            <div className={style.searchbar}>
                <SearchBar />
            </div>

            <FilterBarTime />
            <h1> DANH SÁCH MÁY IN</h1>
            <div className={style.printer_manage} >
                <PrinterBanner
                    printerCode="555666"
                    printerName="ABCD"
                    printerLocation="Sảnh H6"
                    printerStatus="Sẵn sàng"
                />
                <div className={style.containerButton}>
                    <button className={style.buttonAdd} onClick={() => navigate(`/addnewprinter`)} style={{ cursor: 'pointer' }}>Thêm máy in</button>
                </div>
            </div>
        </>

    );
}

export default PrinterManage;
