import React, { useState } from "react";
import styles from "./FilterBarTime.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSTransition } from 'react-transition-group';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default function FilterBarTime() {
    const [openDiv, setOpenDiv] = useState(null);
    const [selectedOption, setSelectedOption] = useState('Tất cả');

    const handleFeaturedClick = (index, option) => {
        setOpenDiv(openDiv === index ? null : index);
        setSelectedOption(option);
    };
    return (
        <>
            <div className="featured_time" onClick={() => handleFeaturedClick(0, selectedOption)}>
                {selectedOption}
                {openDiv === 0 ? (
                    <FontAwesomeIcon className="icon__item_time" icon={faChevronUp} />
                ) : (
                    <FontAwesomeIcon className="icon__item_time" icon={faChevronDown} />
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
                <div className="choose_time">
                    <p onClick={() => handleFeaturedClick(0, 'Tất cả')}>Tất cả</p>
                    <p onClick={() => handleFeaturedClick(0, 'Cũ hơn')}>Cũ hơn</p>
                </div>
            </CSSTransition>
            <div />
        </>
    )
}