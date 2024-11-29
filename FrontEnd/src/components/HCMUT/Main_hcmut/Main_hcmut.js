import './Main_hcmut.scss';
import Footer from '../../Footer/Footer';
import Navbar from '../NavbarLogin/NavbarLogin';
import image1 from '../../../img/Home/sanbong.jpeg'
import image2 from '../../../img/Home/slbk.jpg'
import image3 from '../../../img/Home/slbktv.jpg'

function Main_hcmut() {
    return (
        <>
            <Navbar />
            <h1 class="home">
                <img class="img" src={image3} alt="" />
                <Footer />
            </h1>
        </>
    )
}
export default Main_hcmut;