import React from 'react';
import styles from '../styles/printerHistory.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../components/SearchBar/SearchBar';
import { useState } from 'react';
import FilterBar from '../components/FilterBar/FilterBar';
import FilterBarTime from '../components/FilterBar/FilterBarTime';
import NavbarSPSO from '../components/Navbar/NavbarSPSO';
import { useNavigate, useParams } from "react-router-dom";
function PrinterBanner({ printerCode, printerName, printerLocation, printerStatus }) {
    const navigate = useNavigate(); // Hook for navigation

    const handleClick = () => {
        navigate(`/inforprinter/${printerCode}`); // Navigate to the URL with printerCode
    };
    return (
        <div className={styles.printer_banner} onClick={handleClick} styles={{ cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faPrint} className={styles.printer__icon} />
            <div className={styles.printer_details}>
                <p className={styles.printer_code}>{printerCode}</p>
                <p className={styles.printer_name}>{printerName}</p>
                <p className={styles.printer_location}>{printerLocation}</p>
                <p
                    className={`${styles.printer_status} ${printerStatus === 'Sẵn sàng' ? styles.ready : styles.not_ready
                        }`}
                >
                    {printerStatus}
                </p>
            </div>
        </div>
    )
}


function PrinterHistory() {
    const navigate = useNavigate()
    const { printerid } = useParams()
    return (
        <>
            <NavbarSPSO />
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Máy in: {printerid}</h2>
                    <span className={styles.status}>Sẵn sàng</span>
                </div>

                <div className={styles.filterSection}>
                    <select className={styles.filterDropdown}>
                        <option value="">Tất cả</option>
                        {/* Add more filter options as necessary */}
                    </select>
                    <div className={styles.searchBar}>
                        <input type="text" placeholder="Tìm kiếm" />
                        <button className={styles.filterButton}>
                            <i className="fa fa-filter"></i> {/* FontAwesome Icon */}
                        </button>
                    </div>
                </div>

                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Mã số đơn in</th>
                            <th>Tên file đã in</th>
                            <th>Máy đã in</th>
                            <th>Thời gian in</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <i className="fa fa-file"></i> H6P5555
                            </td>
                            <td>CNPM_HK241</td>
                            <td>ABCD</td>
                            <td>22/5/2024 6:53 AM</td>
                            <td>4000 VNĐ</td>
                        </tr>
                        {/* Repeat rows as needed */}
                    </tbody>
                </table>
            </div>
        </>

    );
}

export default PrinterHistory;
