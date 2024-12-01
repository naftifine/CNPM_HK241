import styles from '../styles/InforStudent.module.scss'
import '../components/Navbar/NavbarStudent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import NavbarStudent from '../components/Navbar/NavbarStudent';
function Inforstudent() {
    return (
        <>
            <NavbarStudent />
            <div className={styles.information}>
                <h1 className={styles.header}> THÔNG TIN SINH VIÊN</h1>
                <hr></hr>
                <a className={styles.icon}><FontAwesomeIcon icon={faCircleUser} style={{ color: "#000000", }} /></a>
                <table class={styles.content}>
                    <thead>
                        <tr>Họ và tên:</tr>
                        <tr>MSSV:</tr>
                        <tr>Khoa:</tr>
                        <tr>Đã in:</tr>
                        <tr>Số trang còn lại:</tr>

                    </thead>
                    <tbody>
                        <tr>Nguyễn Văn A</tr>
                        <tr>2210626</tr>
                        <tr>Khoa học và Kỹ thuật Máy tính</tr>
                        <tr>100 trang</tr>
                        <tr>100 trang</tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Inforstudent;