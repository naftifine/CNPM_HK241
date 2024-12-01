import React from 'react';
import style from '../styles/ManagePrintFormat.module.scss'
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
        navigate(`/printhistory/${printerCode}`); // Navigate to the URL with printerCode
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


function ManagePrintFormat() {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const [formats, setFormats] = useState([
        { name: 'PDF', available: true },
        { name: 'DOCX', available: true },
        { name: 'EXCEL', available: true },
        { name: 'TXT', available: true },
    ]);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const removeFormat = (index) => {
        const newFormats = [...formats];
        newFormats.splice(index, 1);
        setFormats(newFormats);
    };
    const [newFormat, setNewFormat] = useState('');
    const handleAddFormat = () => {
        if (newFormat.trim() === '') {
            alert('File format cannot be empty!');
            return;
        }
        if (formats.some((format) => format.name.toLowerCase() === newFormat.toLowerCase())) {
            alert('File format already exists!');
            return;
        }
        setFormats([...formats, { name: newFormat.trim(), available: true }]);
        setNewFormat(''); // Clear input field
    }
    const [isMoneyPopupOpen, setIsMoneyPopupOpen] = useState(false);
    const [moneyValue, setMoneyValue] = useState(''); // Giá trị mệnh giá tiền

    const toggleMoneyPopup = () => setIsMoneyPopupOpen(!isMoneyPopupOpen);

    const handleMoneyUpdate = () => {
        if (!moneyValue || isNaN(Number(moneyValue)) || Number(moneyValue) <= 0) {
            alert('Mệnh giá không hợp lệ! Vui lòng nhập giá trị hợp lệ.');
            return;
        }
        alert(`Mệnh giá đã được cập nhật thành: ${Number(moneyValue).toLocaleString()}000 VND`);
        setMoneyValue(''); // Reset giá trị input
        setIsMoneyPopupOpen(false); // Đóng popup
    };
    return (
        <>
            <NavbarSPSO />
            <FilterBar />
            <div className={style.searchbar}>
                <SearchBar />
            </div>
            <button onClick={togglePopup} className={style.formatbutton} >
                Thiết lập định dạng file
            </button>
            {isOpen && (
                <div className={style.popup_overlay}>
                    <div className={style.popup_container}>
                        <h3>ĐỊNH DẠNG FILE</h3>
                        <ul>
                            {formats.map((format, index) => (
                                <li key={index} className={style.format_item}>
                                    <span>{format.name}</span>
                                    <button
                                        className={style.remove_button}
                                        onClick={() => removeFormat(index)}
                                    >
                                        ✖
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className={style.add_format_container}>
                            <input
                                type="text"
                                placeholder="Thêm định dạng mới"
                                value={newFormat}
                                onChange={(e) => setNewFormat(e.target.value)}
                                className={style.format_input}
                            />
                            <button onClick={handleAddFormat} className={style.add_button}>
                                Thêm
                            </button>
                        </div>
                        <button onClick={togglePopup} className={style.close_button}>Cập nhật</button>
                    </div>
                </div>
            )}
            <button onClick={toggleMoneyPopup} className={style.pricebutton} >
                Chỉnh mệnh giá
            </button>
            {isMoneyPopupOpen && (
                <div className={style.popup_overlay_money}>
                    <div className={style.popup_container_money}>
                        <h3>CHỈNH MỆNH GIÁ</h3>
                        <div className={style.input_container_money}>
                            <input
                                type="number"
                                placeholder="Nhập mệnh giá mới (Đơn vị 1000 VND)"
                                value={moneyValue}
                                onChange={(e) => setMoneyValue(e.target.value)}
                                className={style.money_input}
                            />
                        </div>
                        <div className={style.button_container_money}>
                            <button onClick={handleMoneyUpdate} className={style.update_button_money}>
                                Cập nhật
                            </button>
                            <button onClick={toggleMoneyPopup} className={style.close_button_money}>
                                Đóng
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <FilterBarTime />
            <h1 className={style.title}> LỊCH SỬ IN ẤN</h1>
            <div className={style.printer_manage} >
                <PrinterBanner
                    printerCode="555666"
                    printerLocation="Sảnh H6"
                    printerStatus="Sẵn sàng"
                />
            </div>
        </>

    );
}

export default ManagePrintFormat;
