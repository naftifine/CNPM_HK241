import style from '../styles/paymore.module.scss'
import NavbarStudent from '../components/Navbar/NavbarStudent'
function Paymore() {
    let quantity = 1;
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

                    <form action="/update" method="post">
                        <div>
                            <input className={style.quantity} type="number" id="quantity" name="quantity" required />
                        </div>

                    </form>
                    <hr></hr>
                </div>
                <div className={style.note}>
                    <h3>Lưu ý:</h3>
                    <p>Mỗi sinh viên sẽ được cấp 40 tờ/tháng.</p>
                    <p>Số lượng giấy được mua tối đa là 40 tờ/lần.</p>
                </div>
                <button className={style.btn}>Mua giấy</button>
            </div>
        </>


    )
}
export default Paymore;