import React, { useState } from "react";
import styles from "./FilterBar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSTransition } from 'react-transition-group';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default function FilterBar() {
    const [openDiv, setOpenDiv] = useState(null);
    const [selectedOption, setSelectedOption] = useState('Tất cả');

    const handleFeaturedClick = (index, option) => {
        setOpenDiv(openDiv === index ? null : index);
        setSelectedOption(option);
    };
    return (
        <>
            <div className="featured" onClick={() => handleFeaturedClick(0, selectedOption)}>
                {selectedOption}
                {openDiv === 0 ? (
                    <FontAwesomeIcon className="icon__item" icon={faChevronUp} />
                ) : (
                    <FontAwesomeIcon className="icon__item" icon={faChevronDown} />
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
                    <p onClick={() => handleFeaturedClick(0, 'TẤT CẢ')}>TẤT CẢ</p>
                    <p onClick={() => handleFeaturedClick(0, 'CƠ SỞ 1')}>CƠ SỞ 1</p>
                    <p onClick={() => handleFeaturedClick(0, 'CƠ SỞ 2')}>CƠ SỞ 2</p>
                </div>
            </CSSTransition>
            <div />
        </>
    )
}