import React, { useState } from 'react';
import styles from '../styles/bill.module.scss'
import '../components/Navbar/NavbarStudent'
import { useParams, useNavigate } from 'react-router-dom';
import NavbarStudent from '../components/Navbar/NavbarStudent';
function Bill() {
    const [showModal, setShowModal] = useState(false);
    const [num, setNum] = useState(15);
    const numprint = 16;
    const navigate = useNavigate();
    const handlePrint = () => {
        if (num < numprint) {
            setShowModal(true);
        } else {
            navigate("/paymore");
        }
    };
    const { filename } = useParams();
    return (
        <>
            <NavbarStudent />
            <div className={styles.information}>
                <h3> Số trang hiện có: {num}</h3>
                <h1 className={styles.header}> THÔNG TIN ĐƠN IN</h1>
                <hr></hr>
                <table class={styles.content}>
                    <thead>
                        <tr>Mã số đơn in: </tr>
                        <tr>Thời gian: </tr>
                        <tr>Tập tin in: </tr>
                        <tr>Số trang in: </tr>
                        <tr>Địa điểm in: </tr>

                    </thead>
                    <tbody>
                        <tr>H6123</tr>
                        <tr>{new Date().toLocaleTimeString()} - {new Date().toLocaleDateString()}</tr>
                        <tr>{filename}</tr>
                        <tr>{numprint}</tr>
                        <tr>H6 - 206</tr>

                    </tbody>
                </table>
                <button className={styles.return} onClick={() => navigate(`/printsetting/${filename}`)}>Trở lại </button>
                <div className={styles.button}>
                    <button className={styles.print} onClick={handlePrint}>In</button>
                    {showModal && (
                        <>
                            <div className={styles.overlay} onClick={handlePrint}></div>
                            <div className={styles.modal}>
                                <p>Số trang hiện có không đủ để in!</p>
                                <p>Vui lòng mua thêm giấy</p>
                                <div >
                                    <button className={styles.btn} onClick={() => setShowModal(false)}>Đóng</button>
                                    <button className={styles.btn} onClick={() => navigate("/paymore")}>Mua giấy</button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}
export default Bill;