
import React, { useState } from 'react';
import styles from '../styles/printerHistory.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSTransition } from 'react-transition-group';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import NavbarSPSO from '../components/Navbar/NavbarSPSO';
import SearchBar from '../components/SearchBar/SearchBar';
import { useParams, useNavigate } from 'react-router-dom';
import { faBars, faFile } from '@fortawesome/free-solid-svg-icons'
function PrinterHistory() {
    const [files, setFiles] = useState([
        {
            ID: 2256596,
            name: "L08_BÀI TẬP THUYẾT TRÌNH",
            printer: "ABC",
            datetime: "22/05/2024 6:53AM",
            cost: 4000,
        },
        {
            ID: 2256596,
            name: "L08_BÀI TẬP THUYẾT TRÌNH",
            printer: "ABC",
            datetime: "22/05/2024 6:53AM",
            cost: 5000,
        },
        {
            ID: 2256596,
            name: "L08_BÀI TẬP THUYẾT TRÌNH",
            printer: "ABC",
            datetime: "22/05/2024 6:53AM",
            cost: 4000,
        },
    ]);

    const [openDiv, setOpenDiv] = useState(null);
    const [selectedOption, setSelectedOption] = useState('Tất cả');

    const handleFeaturedClick = (index, option) => {
        setOpenDiv(openDiv === index ? null : index);
        setSelectedOption(option);
    };

    const [openSort, setOpenSort] = useState(false);

    const handleSortClick = () => {
        setOpenSort(!openSort);
    };
    const [isOpen, setIsOpen] = useState(false);

    const { printerid } = useParams()
    const navigate = useNavigate()
    return (
        <>
            <NavbarSPSO />
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Máy in: {printerid}</h2>
                    <span className={styles.status}>Sẵn sàng</span>
                </div>
            </div>
            <div className={styles.frame}>
                <div className={styles.All} onClick={() => handleFeaturedClick(0, selectedOption)}>
                    {selectedOption}
                    {openDiv === 0 ? (
                        <FontAwesomeIcon icon={faCaretDown} className={styles.icon} flip="vertical" style={{ color: "#000000", }} />
                    ) : (
                        <FontAwesomeIcon icon={faCaretDown} className={styles.icon} flip="horizontal" style={{ color: "#000000", }} />
                    )}
                </div>
                <CSSTransition
                    in={openDiv === 0}
                    timeout={300}
                    classNames={{
                        enter: styles['slide-enter'],
                        enterActive: styles['slide-enter-active'],
                        exit: styles['slide-exit'],
                        exitActive: styles['slide-exit-active'],
                    }}
                    unmountOnExit
                >
                    <div className={styles.choose}>
                        <p onClick={() => handleFeaturedClick(0, 'Tất cả')}>Tất cả</p>
                        <p onClick={() => handleFeaturedClick(0, 'Cũ hơn')}>Cũ hơn</p>
                    </div>
                </CSSTransition>
                <div />
                <div className={styles.search}><SearchBar /></div>
                <div className={styles.sort} onClick={handleSortClick}>
                    <FontAwesomeIcon className={styles.icon_sort} icon={faBars} />
                </div>
                <CSSTransition
                    in={openSort}
                    timeout={300}
                    classNames={{
                        enter: styles['slide-enter'],
                        enterActive: styles['slide-enter-active'],
                        exit: styles['slide-exit'],
                        exitActive: styles['slide-exit-active'],
                    }}
                    unmountOnExit
                >
                    <div className={styles.chooseoption}>
                        <p onClick={() => setOpenSort(false)}>Mới nhất</p>
                        <p onClick={() => setOpenSort(false)}>Loại tệp tin</p>
                        <p onClick={() => setOpenSort(false)}>Tên tệp tin</p>
                    </div>
                </CSSTransition>
                <table className={styles.content}>
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
                        {files.map((file, index) => (
                            <tr key={index}>
                                <td><FontAwesomeIcon className={styles.icon_file} icon={faFile} style={{ color: "#000000" }} />
                                    {file.ID}</td>
                                <td>{file.name}</td>
                                <td>{file.printer}</td>
                                <td>{file.datetime}</td>
                                <td>{file.cost}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={() => navigate("/printmanage")} className={styles.button}>
                    Trở về </button>
            </div >
        </>
    )
}
export default PrinterHistory;