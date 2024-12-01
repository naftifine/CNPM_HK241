import style from './Navbar.module.scss';
import logo from '../../img/Home/logo.png'
function NavbarLogin() {
    return (
        <ul className={style.navbar}>
            <li>
                <a href="#Home" className={style.home}>
                    <img className={style.logo} src={logo} alt="" />
                </a>
            </li>
            <li><a href="#Homepage" className={style.homepage} >LOGIN</a></li>
        </ul>
    );
}
export default NavbarLogin;