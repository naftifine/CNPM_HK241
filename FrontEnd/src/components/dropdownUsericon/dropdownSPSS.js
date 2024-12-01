import React, { useState, useRef, useEffect } from 'react';
import styles from './dropdownSPSS.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
function UserDropdownSPSS() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.user_dropdown} ref={dropdownRef}>
            <button onClick={toggleDropdown} className={styles.user_icon}>
                <FontAwesomeIcon icon={faUser} style={{ color: 'white', fontSize: '25px' }} />
            </button>
            {isOpen && (
                <div className={styles.dropdown_menu}>
                    <a href="/" >Đăng xuất</a>
                </div>
            )}
        </div>
    );
}

export default UserDropdownSPSS;
