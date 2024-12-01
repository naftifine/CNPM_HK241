import React, { useState } from 'react';
import styles from '../styles/choose_file.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSTransition } from 'react-transition-group';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import NavbarStudent from '../components/Navbar/NavbarStudent';
import SearchBar from '../components/SearchBar/SearchBar';
import Upload from '../components/UploadFile/Uploadfile';
import { useParams, useNavigate } from 'react-router-dom';

import { faBars, faFile, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
function Choose_file() {
    const [files, setFiles] = useState([
        {
            name: "L08_BÀI TẬP THUYẾT TRÌNH",
            date: "22/05/2024 6:53AM",
            type: "PDF",
            size: "179KB",
        },
        {
            name: "L09_BÀI TẬP THUYẾT TRÌNH",
            date: "23/05/2024 9:30AM",
            type: "DOCX",
            size: "250KB",
        },
        {
            name: "L10_BÀI TẬP THUYẾT TRÌNH",
            date: "24/05/2024 10:00AM",
            type: "XLSX",
            size: "300KB",
        },
    ]);

    const [openDiv, setOpenDiv] = useState(null);
    const [selectedOption, setSelectedOption] = useState('Tất cả');

    const handleFeaturedClick = (index, option) => {
        setOpenDiv(openDiv === index ? null : index);
        setSelectedOption(option);
    };
    const [openDeletes, setOpenDeletes] = useState(Array(files.length).fill(false));
    const [fileToDelete, setFileToDelete] = useState(null);
    const handleConfirmDelete = () => {
        const updatedFiles = files.filter((file, index) => index !== fileToDelete);
        setFiles(updatedFiles);
        setIsOpen(false);
    };
    const handleDeleteClick = (index) => {
        const updatedOpenDeletes = [...openDeletes];
        updatedOpenDeletes[index] = !updatedOpenDeletes[index];
        setOpenDeletes(updatedOpenDeletes);
    };
    const [openSort, setOpenSort] = useState(false);

    const handleSortClick = () => {
        setOpenSort(!openSort);
    };
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <NavbarStudent />
            <div className={styles.frame}>
                <h1> Chọn tệp để in </h1>
                <div className={styles.upload}>
                    <h2>Tải tệp tin mới </h2>
                    <Upload />
                </div>
                <hr></hr>
                <h2>Các tệp tin đã tải</h2>
                <h3> Số trang hiện có: 15</h3>

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
                    <tbody>
                        {files.map((file, index) => (
                            <tr key={index}>
                                <td>
                                    <FontAwesomeIcon className={styles.icon_file} icon={faFile} style={{ color: "#000000" }} />
                                    {file.name}
                                </td>
                                <td>{file.datetime}</td>
                                <td>{file.type}</td>
                                <td>{file.size}</td>
                                <td>
                                    <div className={styles.delete} onClick={() => handleDeleteClick(index)}>
                                        <FontAwesomeIcon className={styles.icon_delete} icon={faEllipsisVertical} style={{ color: "#000000" }} />
                                    </div>

                                    <CSSTransition
                                        in={openDeletes[index]}
                                        timeout={300}
                                        classNames={{
                                            enter: styles['slide-enter'],
                                            enterActive: styles['slide-enter-active'],
                                            exit: styles['slide-exit'],
                                            exitActive: styles['slide-exit-active'],
                                        }}
                                        unmountOnExit
                                    >
                                        <div className={styles.choosedelete}>
                                            <p onClick={() => {
                                                const updatedOpenDeletes = [...openDeletes];
                                                updatedOpenDeletes[index] = false;
                                                setOpenDeletes(updatedOpenDeletes);
                                            }}>
                                                <button className={styles.button} onClick={togglePopup} >
                                                    Xoá
                                                </button>
                                            </p>

                                        </div >
                                    </CSSTransition>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className={styles.container}>

                    {isOpen && (
                        <>

                            <div className={styles.overlay} onClick={togglePopup}></div>
                            <div className={styles.delete_box}>
                                <h2>Xoá tệp tin</h2>
                                <hr></hr>
                                <p className={styles.ques}><FontAwesomeIcon icon={faFile} className={styles.fileicon} style={{ color: "#f51414", }} />
                                    Bạn có chắc chắn xóa tệp tin này ?</p>
                                < p className={styles.info}>  <FontAwesomeIcon icon={faFile} className={styles.file_icon} style={{ color: "#000000", }} />
                                    <p>L08_BÀI TẬP THUYẾT TRÌNH</p>
                                    <p>Loại: PDF</p>
                                    <p>Kích thước: 179KB</p>
                                    <p>Ngày cập nhật: 22/5/2024 6:53 AM</p>
                                    <p> Số trang: 4</p>
                                </p>

                                <button onClick={handleConfirmDelete} className={styles.close_popup_btn}>
                                    Đồng ý
                                </button>
                                <button onClick={togglePopup} className={styles.close_popup_btn}>
                                    Trở lại
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}
export default Choose_file;