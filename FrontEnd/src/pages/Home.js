import styles from '../styles/Home.module.scss'
import NavbarHome from '../components/Navbar/NavbarHome'
import logo from '../img/Home/logo.png'
import { useNavigate } from 'react-router-dom'
function Hcmut_spso() {
    const navigate = useNavigate();
    return (
        <>
            <NavbarHome />
            <div className={styles.box}>
                <p><img className={styles.img} src={logo} alt="" /></p>
                <p className={styles.content1} onClick={() => navigate(`/homestudent`)}>Tài khoản HCMUT</p>
                <p className={styles.content2} onClick={() => navigate(`/homespso`)}>SPSO</p>
            </div>
        </>
    )
}
export default Hcmut_spso;