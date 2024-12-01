import styles from './NavbarStudent.module.scss';
import logo from '../../img/Home/logo.png'
import UserDropdown from '../dropdownUsericon/dropdownUsericon'
import { NavLink } from 'react-router-dom';
function NavbarStudent() {
    return (
        <ul className={styles.navbar}>
            <li>
                <a href="/homestudent" className={styles.home}>
                    <img className={styles.logo} src={logo} alt="" />
                </a>
            </li>

            <NavLink
                to="/homestudent"
                className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.active : ""}`
                }
            >
                Trang chủ
            </NavLink>
            <li>
                <NavLink
                    to="/print"
                    className={({ isActive }) =>
                        `${styles.navLink} ${isActive ? styles.active : ""}`
                    }
                >
                    In
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/history"
                    className={({ isActive }) =>
                        `${styles.navLink} ${isActive ? styles.active : ""}`
                    }
                >
                    Lịch sử in
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/paymore"
                    className={({ isActive }) =>
                        `${styles.navLink} ${isActive ? styles.active : ""}`
                    }
                >
                    Mua giấy
                </NavLink>
            </li>

            <li className={styles.user} > <UserDropdown /></li>
        </ul>
    );
}
export default NavbarStudent;