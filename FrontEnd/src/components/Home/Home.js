import './Home.scss';
import Footer from '../Footer/Footer';
import Navbar from '../navbar/navbar';
import image1 from '../../img/Home/sanbong.jpeg'
import image2 from '../../img/Home/slbk.jpg'
import image3 from '../../img/Home/slbktv.jpg'
function Home() {
    return (
        <>
            <Navbar />
            <h1 class="home">
                <img class="img" src={image1} alt="" />
                <Footer />
            </h1>

        </>
    )
}
export default Home;
