import React from 'react';
import styles from '../styles/PrinterManage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../components/SearchBar/SearchBar';
import { useState } from 'react';
import FilterBar from '../components/FilterBar/FilterBar';
import FilterBarTime from '../components/FilterBar/FilterBarTime';
import NavbarLogin from '../components/Navbar/NavbarSPSO';
import { useNavigate } from "react-router-dom";
import clsx from 'clsx';

function PrinterBanner({ printerCode, printerName, printerLocation, printerStatus }) {
    const navigate = useNavigate(); // Hook for navigation

    const handleClick = () => {
        navigate(`/inforprinter/${printerCode}`); // Navigate to the URL with printerCode
    };
    return (
        <div className={styles.printer_banner} onClick={handleClick} style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faPrint} className={styles.print_icon} />
            <div className={styles.printer_details}>
                <p className={styles.printer_code}>{printerCode}</p>
                <p className={styles.printer_name}>{printerName}</p>
                <p className={styles.printer_location}>{printerLocation}</p>
                <p
                    className={clsx(styles.printer_status, {
                        [styles.ready]: printerStatus === 'Sẵn sàng',
                        [styles.not_ready]: printerStatus !== 'Sẵn sàng',
                    })}
                >
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
            <NavbarLogin />
            <FilterBar />
            <SearchBar setDisplayText={setDisplayText} />
            <FilterBarTime />
            <div className={styles.printer_manage}>
                <PrinterBanner
                    printerCode="555666"
                    printerName="ABCD"
                    printerLocation="Sảnh H6"
                    printerStatus="Sẵn sàng"
                />
                <div className={styles.containerButton}>
                    <button className={styles.buttonAdd}>Thêm máy in</button>
                </div>
            </div>
        </>

    );
}

export default PrinterManage;
