import './NavbarLogin.scss';
import logo from '../../../img/Home/logo.png'
import UserDropdown from '../../dropdownUsericon/dropdownUsericon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
function NavbarLogin() {
    return (
        <ul className="navbar">
            <li>
                <a href="#Home" class="home">
                    <img className="logo" src={logo} alt="" />
                </a>
            </li>

            <li><a href="#Homepage" className="homepage" >Trang chủ</a></li>
            <li><a href="#Manage_Printer" className="manage_printer" >Quản lý máy in</a></li>
            <li><a href="#Manage_Print" className="manage_print" >Quản lý in ấn</a></li>
            <li><a href="#Report" className="report" > Báo cáo</a></li>
            <li><a href="#User" className="user" > <UserDropdown /></a></li>
        </ul>
    );
}
export default NavbarLogin;