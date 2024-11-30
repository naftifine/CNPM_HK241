import './InfoPrinter.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import NavbarLogin from '../NavbarLogin/NavbarLogin.js'
import { useState } from 'react';


function Infor() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
        
    return (
        <>
            <NavbarLogin />
            <div className='information'>
                <h1 className='header'>THÔNG TIN MÁY IN</h1>
                <hr></hr>
                <div className='content'>
                    <p>Tên máy:</p>
                    <p>Dòng máy:</p>
                    <p>Cơ sở:</p>
                    <p>Trạng thái:</p>
                </div>
                <div className="container">
                    <button className="button">Trở lại</button>
                    <button className="button">Cập nhật</button>
                    <button className="button" onClick={togglePopup} >
                        Xoá
                    </button>
                        {isOpen && (
                            
                            <div className="delete-box">
                                <h2>Xoá máy in</h2>
                                <p>Bạn chắc chắn muốn xoá máy in?</p>
                                <button onClick={togglePopup} className="close-popup-btn">
                                    Huỷ
                                </button>
                                <button onClick={togglePopup} className="close-popup-btn">
                                    Xác nhận
                                </button>
                            </div>
                            
                        )}
                </div>
            </div>
        </>
    )
}
export default Infor;