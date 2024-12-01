import styles from '../styles/addprinter.module.scss';
import NavbarLogin from '../components/Navbar/NavbarSPSO.js'
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


function AddNewPrinter() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    const navigate = useNavigate();
    return (

        <>
            <NavbarLogin />
            <div className={styles.information}>
                <h1 className={styles.header}>THÔNG TIN MÁY IN</h1>
                <hr></hr>
                <div className={styles.content}>
                    <p>Tên máy:</p>
                    <p>Dòng máy:</p>
                    <p>Cơ sở:</p>
                    <p>Trạng thái:</p>
                </div>
                <div className={styles.container}>
                    <button className={styles.buttonback} onClick={() => navigate("/printermanage")}>Trở lại</button>
                    <button className={styles.button} onClick={() => navigate("/printermanage")}>Cập nhật</button>
                    <button className={styles.button} onClick={togglePopup} >
                        Xoá
                    </button>
                    {isOpen && (

                        <div className={styles.delete_box}>
                            <h2>Xoá máy in</h2>
                            <p>Bạn chắc chắn muốn xoá máy in?</p>
                            <button onClick={togglePopup} className={styles.close_popup_btn}>
                                Huỷ
                            </button>
                            <button onClick={togglePopup} className={styles.close_popup_btn}>
                                Xác nhận
                            </button>
                        </div>

                    )}
                </div>
            </div>
        </>
    )
}
export default AddNewPrinter;