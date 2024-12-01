import styles from './NavbarSPSO.module.scss';
import React, { useState } from "react";
import logo from '../../img/Home/logo.png'
import UserDropdownSPSS from '../dropdownUsericon/dropdownSPSS';
import { NavLink } from 'react-router-dom';
function NavbarSPSO() {
    const [activeTab, setActiveTab] = useState("home");

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    return (

        <ul className={styles.navbar}>
            <li>
                <a href="/homespso" className={styles.home}>
                    <img className={styles.logo} src={logo} alt="" />
                </a>
            </li>

            <NavLink
                to="/homespso"
                className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.active : ""}`
                }
            >
                Trang chủ
            </NavLink>
            <li>
                <NavLink
                    to="/printermanage"
                    className={({ isActive }) =>
                        `${styles.navLink} ${isActive ? styles.active : ""}`
                    }
                >
                    Quản lý máy in
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/printmanage"
                    className={({ isActive }) =>
                        `${styles.navLink} ${isActive ? styles.active : ""}`
                    }
                >
                    Quản lý in ấn
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/report"
                    className={({ isActive }) =>
                        `${styles.navLink} ${isActive ? styles.active : ""}`
                    }
                >
                    Báo cáo
                </NavLink>
            </li>

            <li className={styles.user} > <UserDropdownSPSS /></li>
        </ul>
    );
}
export default NavbarSPSO;