import React from 'react';
import './PrinterManage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useState } from 'react';
import FilterBar from '../../components/FilterBar/FilterBar';
import FilterBarTime from '../../components/FilterBarTime/FilterBarTime';
import NavbarLogin from '../../components/SPSO/NavbarLogin/NavbarLogin';
import { useNavigate } from "react-router-dom";

function PrinterBanner({ printerCode, printerName, printerLocation, printerStatus }) {
    const navigate = useNavigate(); // Hook for navigation

    const handleClick = () => {
        navigate(`/inforprinter/${printerCode}`); // Navigate to the URL with printerCode
    };
    return (
        <div className="printer-banner" onClick={handleClick} style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faPrint} className="printer-icon" />
            <div className="printer-details">
                <p className="printer-code">{printerCode}</p>
                <p className="printer-name">{printerName}</p>
                <p className="printer-location">{printerLocation}</p>
                <p className={`printer-status ${printerStatus === 'Sẵn sàng' ? 'ready' : 'not-ready'}`}>
                    {printerStatus}
                </p>
            </div>
        </div>
    )
}





function PrinterManage() {
    const [displayText, setDisplayText] = useState("");
    const navigate = useNavigate();

    return (
        <>
            <NavbarLogin />
            <FilterBar />
            <SearchBar setDisplayText={setDisplayText} />
            <FilterBarTime />
            <div className="printer-manage">
                <PrinterBanner
                    printerCode="555666"
                    printerName="ABCD"
                    printerLocation="Sảnh H6"
                    printerStatus="Sẵn sàng"
                />
                <div className="containerButton">
                    <button className='buttonAdd'>Thêm máy in</button>
                </div>
            </div>
        </>

    );
}

export default PrinterManage;
