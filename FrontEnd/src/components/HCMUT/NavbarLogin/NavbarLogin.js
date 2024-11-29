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
            <li><a href="#Print" className="print" >In</a></li>
            <li><a href="#History_print" className="history" >Lịch sử in</a></li>
            <li><a href="#Purchase" className="purchase" > Mua giấy</a></li>
            <li><a href="#User" className="user" > <UserDropdown /></a></li>
        </ul>
    );
}
export default NavbarLogin;