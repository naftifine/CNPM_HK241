import styles from './choose_file.scss'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSTransition } from 'react-transition-group';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../NavbarLogin/NavbarLogin'
import SearchBar from '../../SearchBar/SearchBar';
import Upload from '../UploadFile/Uploadfile'
function Choose_file() {
    const [openDiv, setOpenDiv] = useState(null);
    const [selectedOption, setSelectedOption] = useState('Tất cả');

    const handleFeaturedClick = (index, option) => {
        setOpenDiv(openDiv === index ? null : index);
        setSelectedOption(option);
    };
    return (
        <>
            <Navbar />
            <div className='frame'>
                <h1> Chọn tệp để in </h1>
                <div className='upload'>
                    <h2>Tải tệp tin mới </h2>
                    <Upload />
                </div>
                <hr></hr>
                <h2>Các tệp tin đã tải</h2>

                <div className="All" onClick={() => handleFeaturedClick(0, selectedOption)}>
                    {selectedOption}
                    {openDiv === 0 ? (
                        <FontAwesomeIcon icon={faCaretDown} className='icon' flip="vertical" style={{ color: "#000000", }} />
                    ) : (
                        <FontAwesomeIcon icon={faCaretDown} className='icon' flip="horizontal" style={{ color: "#000000", }} />
                    )}
                </div>
                <CSSTransition
                    in={openDiv === 0}
                    timeout={300}
                    classNames={{
                        enter: styles['slide-enter'],
                        enterActive: styles['slide-enter-active'],
                        exit: styles['slide-exit'],
                        exitActive: styles['slide-exit-active'],
                    }}
                    unmountOnExit
                >
                    <div className="choose">
                        <p onClick={() => handleFeaturedClick(0, 'Tất cả')}>Tất cả</p>
                        <p onClick={() => handleFeaturedClick(0, 'Cũ hơn')}>Cũ hơn</p>
                    </div>
                </CSSTransition>
                <div />
                <SearchBar />
            </div>
        </>
    )
}
export default Choose_file;