import styles from '../styles/Main_spso.module.scss';
import Footer from '../components/Footer/Footer';
import NavbarSPSO from '../components/Navbar/NavbarSPSO';
import image3 from '../img/Home/slbktv.jpg'

function Main_spso() {
    return (
        <>
            <NavbarSPSO />
            <h1 className={styles.home}>
                <img class={styles.img} src={image3} alt="" />
                <Footer />
            </h1>
        </>
    )
}
export default Main_spso;