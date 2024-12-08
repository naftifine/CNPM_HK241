import style from '../styles/paymore.module.scss'
import NavbarStudent from '../components/Navbar/NavbarStudent'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Paymore() {
    const navigate = useNavigate();
    const [numpage, setNumPage] = useState(''); // Số lượng giấy muốn mua
    const [num, setNum] = useState(15); // Số trang hiện có

    // Handle validation and navigate to payment page
    const handleNumPageUpdate = () => {
        if (!numpage || isNaN(Number(numpage)) || Number(numpage) <= 0 || Number(numpage) > 40 || !Number.isInteger(Number(numpage))) {
            alert('Số trang không hợp lệ!');
            return;
        }
        // Navigate to the payment page with both numpage and num as parameters
        navigate(`/payment/${numpage}/${num}`);
        setNumPage(''); // Clear the input field
    };

    return (
        <>
            <NavbarStudent />
            <div className={style.paper}>
                <h1 className={style.header}>Mua giấy in</h1>
                <h2>Số trang hiện có: {num}</h2> {/* Show the current number of pages */}
                <div className={style.size}>
                    <h3>Kích thước giấy:</h3>
                    <p>A4 - 210 x 297mm</p>
                    <hr />
                </div>
                <div className={style.count}>
                    <h3>Số lượng giấy muốn mua:</h3>

                    <form>
                        <div>
                            <input
                                className={style.quantity}
                                type="number"
                                id="quantity"
                                name="quantity"
                                required
                                value={numpage}
                                onChange={(e) => setNumPage(e.target.value)}
                            />
                        </div>
                    </form>
                    <hr />
                </div>
                <div className={style.note}>
                    <h3>Lưu ý:</h3>
                    <p>Mỗi sinh viên sẽ được cấp 40 tờ/tháng.</p>
                    <p>Số lượng giấy được mua tối đa là 40 tờ/lần.</p>
                </div>
                <button className={style.btn} onClick={handleNumPageUpdate}>Mua giấy</button>
            </div>
        </>
    );
}

export default Paymore;
