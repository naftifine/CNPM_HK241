import React, { useState } from 'react';
import styles from '../styles/choose_file.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSTransition } from 'react-transition-group';
import { faCaretDown, faBars, faFile, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import NavbarStudent from '../components/Navbar/NavbarStudent';
import SearchBar from '../components/SearchBar/SearchBar';
import Upload from '../components/UploadFile/Uploadfile';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function ChooseFile() {
    // const [files, setFiles] = useState([]);
    // const API_URL = 'http://localhost:3000/';
    // // Hàm fetch danh sách file từ backend
    // const fetchFiles = async () => {
    //     try {
    //         const response = await fetch(API_URL);
    //         if (!response.ok) {
    //             throw new Error('Failed to fetch files.');
    //         }
    //         const data = await response.json();
    //         setFiles(data);
    //     } catch (error) {
    //         console.error('Error fetching files:', error.message);
    //     }
    // };

    // // Gọi fetchFiles khi component được render lần đầu
    // useEffect(() => {
    //     fetchFiles();
    // }, []);
    const [files, setFiles] = useState([
        {
            name: "L08_BÀI TẬP THUYẾT TRÌNH",
            datetime: "22/05/2024 6:53AM",
            type: "PDF",
            size: "179KB",
        },
        {
            name: "L09_BÀI TẬP THUYẾT TRÌNH",
            datetime: "23/05/2024 9:30AM",
            type: "DOCX",
            size: "250KB",
        },
        {
            name: "L10_BÀI TẬP THUYẾT TRÌNH",
            datetime: "24/05/2024 10:00AM",
            type: "XLSX",
            size: "300KB",
        },
    ]);


    const [openDiv, setOpenDiv] = useState(null);
    const [selectedOption, setSelectedOption] = useState('Tất cả');
    const [openSort, setOpenSort] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [fileToDelete, setFileToDelete] = useState(null);
    const navigate = useNavigate();

    const handleFeaturedClick = (index, option) => {
        setOpenDiv(openDiv === index ? null : index);
        setSelectedOption(option);
    };

    const handleSortClick = () => {
        setOpenSort(!openSort);
    };

    const handleSort = (criteria) => {
        const sortedFiles = [...files].sort((a, b) => {
            if (criteria === 'Mới nhất') return new Date(b.datetime) - new Date(a.datetime);
            if (criteria === 'Loại') return a.type.localeCompare(b.type);
            if (criteria === 'Tên') return a.name.localeCompare(b.name);
            return 0;
        });
        setFiles(sortedFiles);
        setOpenSort(false);
    };

    const handleDeleteClick = (file) => {
        setFileToDelete(file);
        setIsOpen(true);
    };

    const handleConfirmDelete = () => {
        setFiles(files.filter((file) => file !== fileToDelete));
        setFileToDelete(null);
        setIsOpen(false);
    };

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <NavbarStudent />
            <div className={styles.frame}>
                <h1>Chọn tệp để in</h1>
                <div className={styles.upload}>
                    <h2>Tải tệp tin mới</h2>
                    <Upload />
                </div>
                <hr />
                <h2>Các tệp tin đã tải</h2>
                <h3>Số trang hiện có: 15</h3>
                <div className={styles.All} onClick={() => handleFeaturedClick(0, selectedOption)}>
                    {selectedOption}
                    <FontAwesomeIcon icon={faCaretDown} className={styles.icon} style={{ transform: openDiv === 0 ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                </div>
                <CSSTransition in={openDiv === 0} timeout={300} classNames={styles} unmountOnExit>
                    <div className={styles.choose}>
                        <p onClick={() => handleFeaturedClick(0, 'Tất cả')}>Tất cả</p>
                        <p onClick={() => handleFeaturedClick(0, 'Cũ hơn')}>Cũ hơn</p>
                    </div>
                </CSSTransition>
                <div className={styles.search}><SearchBar /></div>
                <div className={styles.sort} onClick={handleSortClick}>
                    <FontAwesomeIcon className={styles.icon_sort} icon={faBars} />
                </div>
                <CSSTransition in={openSort} timeout={300} classNames={styles} unmountOnExit>
                    <div className={styles.chooseoption}>
                        <p onClick={() => handleSort('Mới nhất')}>Mới nhất</p>
                        <p onClick={() => handleSort('Loại')}>Loại tệp tin</p>
                        <p onClick={() => handleSort('Tên')}>Tên tệp tin</p>
                    </div>
                </CSSTransition>
                {files.length > 0 ? (
                    <table className={styles.content}>
                        <tbody>
                            {files.map((file, index) => (
                                <tr key={index} onClick={() => navigate(`/printsetting/${file.name}`)}>
                                    <td>
                                        <FontAwesomeIcon className={styles.icon_file} icon={faFile} />
                                        {file.name}
                                    </td>
                                    <td>{file.datetime}</td>
                                    <td>{file.type}</td>
                                    <td>{file.size}</td>
                                    <td>
                                        <div
                                            className={styles.delete}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleDeleteClick(file);
                                            }}
                                        >
                                            <FontAwesomeIcon className={styles.icon_delete} icon={faEllipsisVertical} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Không có tệp tin nào để hiển thị.</p>
                )}
                {isOpen && (
                    <>
                        <div className={styles.overlay} onClick={togglePopup}></div>
                        <div className={styles.delete_box}>
                            <h2>Xoá tệp tin</h2>
                            <hr />
                            <p className={styles.ques}>
                                <FontAwesomeIcon icon={faFile} className={styles.fileicon} style={{ color: '#f51414' }} />
                                Bạn có chắc chắn xóa tệp tin này?
                            </p>
                            <p className={styles.btn}>  <FontAwesomeIcon icon={faFile} className={styles.file_icon} style={{ color: "#000000", }} /> </p>
                            <div className={styles.info}>

                                <p>{fileToDelete?.name}</p>
                                <p>Loại: {fileToDelete?.type}</p>
                                <p>Kích thước: {fileToDelete?.size}</p>
                                <p>Ngày cập nhật: {fileToDelete?.datetime}</p>
                            </div>
                            <button onClick={handleConfirmDelete} className={styles.popup_btn}>
                                Đồng ý
                            </button>
                            <button onClick={togglePopup} className={styles.popup_btn}>
                                Trở lại
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default ChooseFile;
