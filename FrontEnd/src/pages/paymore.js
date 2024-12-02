import style from '../styles/paymore.module.scss'
import NavbarStudent from '../components/Navbar/NavbarStudent'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Paymore() {
    const navigate = useNavigate()
    const [numpage, setNumPage] = useState(''); // Giá trị mệnh giá tiền


    const handleNumPageUpdate = () => {
        if (!numpage || isNaN(Number(numpage)) || Number(numpage) <= 0 || Number(numpage) > 40 || !Number.isInteger(Number(numpage))) {
            alert('Số trang không hợp lệ!');
            return;
        }
        navigate(`/payment/${Number(numpage)}`)
        setNumPage('');
    };
    return (
        <>
            <NavbarStudent />
            <div className={style.paper}>
                <h1 className={style.header}> Mua giấy in</h1>
                <h2 > Số trang hiện có: 15</h2>
                <div className={style.size}>
                    <h3>Kích thước giấy:</h3>
                    <p> A4 - 210 x 297mm</p>
                    <hr></hr>
                </div>
                <div className={style.count}>
                    <h3>Số lượng giấy muốn mua:</h3>

                    <form>
                        <div>
                            <input className={style.quantity} type="number" id="quantity" name="quantity" required value={numpage}
                                onChange={(e) => setNumPage(e.target.value)} />
                        </div>

                    </form>
                    <hr></hr>
                </div>
                <div className={style.note}>
                    <h3>Lưu ý:</h3>
                    <p>Mỗi sinh viên sẽ được cấp 40 tờ/tháng.</p>
                    <p>Số lượng giấy được mua tối đa là 40 tờ/lần.</p>
                </div>
                <button className={style.btn} onClick={handleNumPageUpdate}>Mua giấy</button>
            </div>
        </>


    )
}
export default Paymore;