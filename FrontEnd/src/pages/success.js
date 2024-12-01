import styles from '../styles/success.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import '../components/Navbar/NavbarStudent'
import NavbarStudent from '../components/Navbar/NavbarStudent';
function Success() {
    let numpay = 5;
    let price = 500;
    const totalPrice = numpay * price;
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
                <FontAwesomeIcon className={styles.icon_check} icon={faCircleCheck} style={{ color: "#59d251", }} />
                <p>Thanh toán thành công</p>
            </div>
        </>
    )
}
export default Success;