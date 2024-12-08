import React, { useState, useEffect } from 'react';
import styles from '../styles/payment.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';
import NavbarStudent from '../components/Navbar/NavbarStudent';

function Payment() {
    const { numpage, num } = useParams(); // Get both numpage and num from the URL parameters
    const price = 500; // Price per page
    const totalPrice = numpage * price;
    const navigate = useNavigate();

    const [startTime, setStartTime] = useState(null);
    const [showQRCode, setShowQRCode] = useState(false);
    const [countdown, setCountdown] = useState(0);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    // Handle click to show QR code and start countdown
    const handleClick = () => {
        setShowQRCode(true);
        setStartTime(new Date());
        setCountdown(300); // Set countdown to 5 minutes
    };

    useEffect(() => {
        if (countdown > 0 && startTime) {
            const timer = setInterval(() => {
                setCountdown(prev => prev - 1);
            }, 1000);

            return () => clearInterval(timer);
        } else if (countdown === 0 && showQRCode) {
            setShowQRCode(false);
            if (!paymentSuccess) {
                navigate('/fail'); // Navigate to failure page if payment unsuccessful
            }
        }
    }, [countdown, showQRCode, navigate, startTime, paymentSuccess]);

    // Automatically mark payment as successful after 5 seconds
    useEffect(() => {
        if (showQRCode) {
            const timeout = setTimeout(() => {
                setPaymentSuccess(true); // Mark payment as successful
                setCountdown(0); // Stop countdown
                const updatedNum = parseInt(num) + parseInt(numpage); // Update the number of pages
                navigate('/success', { state: { updatedNum } }); // Navigate to success page
            }, 5000); // Wait for 5 seconds

            return () => clearTimeout(timeout);
        }
    }, [showQRCode, navigate, numpage, num]);

    return (
        <>
            <NavbarStudent />
            <div className={styles.information}>
                <h3>Số trang hiện có: {num}</h3> {/* Display current number of pages */}
                <h1 className={styles.header}>MUA THÊM GIẤY</h1>
                <hr />
                <table className={styles.content}>
                    <thead>
                        <tr><th>Mã số đơn:</th></tr>
                        <tr><th>Thời gian:</th></tr>
                        <tr><th>Giá (1 tờ):</th></tr>
                        <tr><th>Số lượng:</th></tr>
                        <tr><th>Tổng tiền:</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>H7565</td></tr>
                        <tr><td>{new Date().toLocaleTimeString()} - {new Date().toLocaleDateString()}</td></tr>
                        <tr><td>{price} VNĐ</td></tr>
                        <tr><td>{numpage}</td></tr>
                        <tr><td>{totalPrice} VNĐ</td></tr>
                    </tbody>
                </table>
                <button className={styles.return} onClick={() => navigate("/paymore")}>Trở lại</button>

                <div className={styles.button}>
                    <button onClick={handleClick} className={styles.pay}>Thanh toán</button>

                    {showQRCode && (
                        <>
                            <div className={styles.overlay} onClick={handleClick}></div>
                            <div className={styles.qrcode}>
                                <QRCode value="https://example.com" size={256} />
                                <p>Hãy quét mã để thanh toán nhé!</p>
                                <p>(Mã QR sẽ biến mất sau {countdown} giây)</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Payment;
