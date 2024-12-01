import styles from '../styles/InfoPrinter.module.scss';
import NavbarLogin from '../components/Navbar/NavbarSPSO.js'
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


function AddNewPrinter() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    const navigate = useNavigate();
    const { printerid } = useParams();
    return (

        <>
            <NavbarLogin />
            <div className={styles.information}>
                <h1 className={styles.header}>THÔNG TIN MÁY IN</h1>
                <form className={styles.formGroup}>
                    <label htmlFor="machineName" className={styles.label} >Tên máy:</label>
                    <input type="text" id="machineName" value={printerid} />

                    <label htmlFor="machineModel" className={styles.label}>Dòng máy:</label>
                    <select id="machineModel" value='1'>
                        <option value="" >Chọn dòng máy</option>
                        <option value="1" >1</option>
                        <option value="2" >2</option>
                        <option value="3" >3</option>
                    </select>

                    <label htmlFor="branch" className={styles.label}>Cơ sở:</label>
                    <select id="branch" value="1">
                        <option value="">Chọn cơ sở</option>
                        <option value="1">Cơ sở 1</option>
                        <option value="2">Cơ sở 2</option>
                    </select>

                    <label htmlFor="location" className={styles.label}>Vị trí:</label>
                    <select id="location" value="H3">
                        <option value="" >Chọn vị trí</option>
                        <option value="H6">Sảnh H6</option>
                        <option value="H2">Sảnh H2</option>
                        <option value="H3">Sảnh H3</option>
                        <option value="H1">Sảnh H1</option>
                    </select>

                    <label htmlFor="status" className={styles.label}>Trạng thái:</label>
                    <select id="status">
                        <option value="ready">Sẵn sàng</option>
                        <option value="busy">Máy bận</option>
                    </select>

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
                </form>
            </div>
        </>
    )
}
export default AddNewPrinter;