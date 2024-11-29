import './hcmut_spso.scss'
import Navbar from '../NavbarLogin/NavbarLogin';
import logo from '../../img/Home/logo.png'
function hcmut_spso() {
    return (
        <>
            <Navbar />
            <div className='box'>
                <p><img class="img" src={logo} alt="" /></p>
                <p className='content1'>Tài khoản HCMUT</p>
                <p className='content2'>SPSO</p>
            </div>
        </>
    )
}
export default hcmut_spso;