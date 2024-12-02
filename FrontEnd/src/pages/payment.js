import React, { useState, useEffect } from 'react';
import styles from '../styles/payment.module.scss'
import '../components/Navbar/NavbarStudent'
import { useParams, useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';
import NavbarStudent from '../components/Navbar/NavbarStudent';
function Payment() {
    let num = 15;
    const { numpage } = useParams();
    let price = 500;
    const totalPrice = numpage * price;
    const navigate = useNavigate();
    const [showQRCode, setShowQRCode] = useState(false);
    const [countdown, setCountdown] = useState(0);
    const handleClick = () => {
        setShowQRCode(true);
        setCountdown(300);
    };
    useEffect(() => {
        if (countdown > 0) {
            const timer = setInterval(() => {
                setCountdown(prev => prev - 1);
            }, 1000);

            return () => clearInterval(timer);
        } else if (countdown === 0 && showQRCode) {
            setShowQRCode(false);
            navigate('/success');
        }
    }, [countdown, showQRCode, navigate]);
    return (
        <>
            <NavbarStudent />
            <div className={styles.information}>
                <h3> Số trang hiện có: {num}</h3>
                <h1 className={styles.header}> MUA THÊM GIẤY</h1>
                <hr></hr>
                <table class={styles.content}>
                    <thead>
                        <tr>Mã số đơn: </tr>
                        <tr>Thời gian: </tr>
                        <tr>Giá (1 tờ):</tr>
                        <tr>Số lượng: </tr>
                        <tr>Tổng tiền: </tr>

                    </thead>
                    <tbody>
                        <tr>H7565</tr>
                        <tr>12:05 PM 22/10/2024</tr>
                        <tr>{price} VNĐ</tr>
                        <tr>{numpage}</tr>
                        <tr>{totalPrice} VNĐ</tr>

                    </tbody>
                </table>
                <button className={styles.return} onClick={() => navigate("/paymore")}>Trở lại </button>
                <div className={styles.button}>
                    <button onClick={handleClick} className={styles.pay}>Thanh toán</button>
                    {showQRCode && (
                        <>
                            <div className={styles.overlay} onClick={handleClick}></div>
                            <div className={styles.qrcode}>
                                <QRCode value="https://example.com" size={256} />
                                <p>Hãy quét mã để thanh toán nhé !</p>
                                <p>(Mã QR sẽ biến mất sau {countdown} giây)</p>
                            </div>
                        </>

                    )}
                </div>
            </div>
        </>
    )
}
export default Payment;