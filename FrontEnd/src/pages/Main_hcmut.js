import styles from '../styles/Main_hcmut.module.scss';
import Footer from '../components/Footer/Footer';
import NavbarStudent from '../components/Navbar/NavbarStudent';
import image3 from '../img/Home/slbktv.jpg'

function Main_hcmut() {
    return (
        <>
            <NavbarStudent />
            <h1 className={styles.homehome}>
                <img className={styles.imghome} src={image3} alt="" />
                <Footer />
            </h1>
        </>
    )
}
export default Main_hcmut;