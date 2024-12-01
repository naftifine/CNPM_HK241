import React, { useState, useRef, useEffect } from 'react';
import style from './dropdownUsericon.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
function UserDropdown() {
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
        <div className={style.user__dropdown} ref={dropdownRef}>
            <button onClick={toggleDropdown} className={style.user__icon}>
                <FontAwesomeIcon icon={faUser} style={{ color: 'white', fontSize: '25px' }} />
            </button>
            {isOpen && (
                <div className={style.dropdown__menu}>
                    <a href="/profile" >Thông tin</a>
                    <a href="/" >Đăng xuất</a>
                </div>
            )}
        </div>
    );
}

export default UserDropdown;
