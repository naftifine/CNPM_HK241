import './Infor.scss';
import '../NavbarLogin/NavbarLogin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import NavbarLogin from '../NavbarLogin/NavbarLogin';
function Infor() {
    return (
        <>
            <NavbarLogin />
            <div className='information'>
                <h1 className='header'> THÔNG TIN SINH VIÊN</h1>
                <hr></hr>
                <a className='icon'><FontAwesomeIcon icon={faCircleUser} style={{ color: "#000000", }} /></a>
                <table class="content">
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
export default Infor;