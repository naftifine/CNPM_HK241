import { useState } from 'react';
import style from '../styles/login.module.scss';
import NavbarLogin from '../components/Navbar/NavbarHome';
import { useNavigate } from 'react-router-dom';

function LoginSPSO() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Ensure username includes the '@hcmut.edu.vn' domain
        let userEmail = username;
        if (!userEmail.includes('@hcmut.edu.vn')) {
            userEmail += '@hcmut.edu.vn';
        }

        if (userEmail === 'duy.vuduc2210549' && password === '12345') { // Example credentials
            setMessage('Đăng nhập thành công');
            setMessageStyle('green');
            navigate(`/homespso/home`)
        } else {
            setMessage('Sai BKNetID hoặc mật khẩu');
            setMessageStyle('red');
        }

        // Clear the inputs
        setUsername('');
        setPassword('');
    };

    const [messageStyle, setMessageStyle] = useState('red');

    return (
        <>
            <NavbarLogin />
            <div className={style.loginhcmut}>
                <h1>HỆ THỐNG ĐĂNG NHẬP</h1>
                <form id={style.loginform} onSubmit={handleSubmit}>
                    <label htmlFor="username">BKNetID:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        placeholder="Enter your BKNetID"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <label htmlFor="password">Mật khẩu:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">Đăng nhập</button>
                    <p id="message" style={{ color: messageStyle }}>
                        {message}
                    </p>
                </form>
            </div>
        </>
    );
}

export default LoginSPSO;
