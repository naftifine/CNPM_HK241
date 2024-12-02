import styles from '../styles/fail.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import '../components/Navbar/NavbarStudent'
import { useNavigate } from 'react-router-dom';
import NavbarStudent from '../components/Navbar/NavbarStudent';
function Fail() {
    let numpay = 5;
    let price = 500;
    const totalPrice = numpay * price;
    const navigate = useNavigate();
    return (
        <>
            <NavbarStudent />
            <div className={styles.information}>
                <h1 className={styles.header}> THÔNG TIN ĐƠN IN</h1>
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
                        <tr>{numpay}</tr>
                        <tr>{totalPrice} VNĐ</tr>

                    </tbody>
                </table>
                <FontAwesomeIcon className={styles.icon_check} icon={faCircleXmark} style={{ color: "#b30000", }} />
                <div className={styles.payback}>
                    <p>Thanh toán không thành công</p>
                    <button className={styles.paybackbtn} onClick={() => navigate("/paymore")}>Thanh toán lại</button>
                </div>
            </div>
        </>
    )
}
export default Fail;