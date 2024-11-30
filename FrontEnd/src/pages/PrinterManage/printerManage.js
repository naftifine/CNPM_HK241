import React from 'react';
import './PrinterManage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useState } from 'react';
import FilterBar from '../../components/FilterBar/FilterBar';
import FilterBarTime from '../../components/FilterBarTime/FilterBarTime';
import NavbarLogin from '../../components/SPSO/NavbarLogin/NavbarLogin';
const PrinterBanner = ({ printerCode, printerName, printerLocation, printerStatus }) => (
    <div className="printer-banner">
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
);


function PrinterManage() {
    const [displayText, setDisplayText] = useState("");


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
                <PrinterBanner
                    printerCode="555666"
                    printerName="ABCD"
                    printerLocation="Sảnh H6"
                    printerStatus="Sẵn sàng"
                />
                <PrinterBanner
                    printerCode="555666"
                    printerName="ABCD"
                    printerLocation="Sảnh H6"
                    printerStatus="Sẵn sàng"
                />
                <PrinterBanner
                    printerCode="555666"
                    printerName="ABCD"
                    printerLocation="Sảnh H6"
                    printerStatus="Máy bận"
                />
                <div className="containerButton">
                    <button className='buttonAdd'>Thêm máy in</button>
                </div>
            </div>
        </>

    );
}

export default PrinterManage;
