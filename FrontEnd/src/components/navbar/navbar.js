import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import logo from '../../img/Home/logo.png'
function Navbar() {
    return (
        <ul className="navbar">
            <li>
                <a href="#Home" class="home">
                    <img className="logo" src={logo} alt="" />
                </a>
            </li>
            <li><a href="#SignIn" className="login" >LOGIN</a></li>
        </ul>
    );
}
export default Navbar;