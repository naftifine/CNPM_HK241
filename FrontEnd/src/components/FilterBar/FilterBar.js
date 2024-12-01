import React, { useState } from "react";
import styles from './FilterBar.module.scss';
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
            <div className={styles.featured} onClick={() => handleFeaturedClick(0, selectedOption)}>
                {selectedOption}
                {openDiv === 0 ? (
                    <FontAwesomeIcon className={styles.icon__item} icon={faChevronUp} />
                ) : (
                    <FontAwesomeIcon className={styles.icon__item} icon={faChevronDown} />
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
                <div className={styles.choose}>
                    <p onClick={() => handleFeaturedClick(0, 'Tất cả')}>Tất cả</p>
                    <p onClick={() => handleFeaturedClick(0, 'Cơ sở 1')}>Cơ sở 1</p>
                    <p onClick={() => handleFeaturedClick(0, 'Cơ sở 2')}>Cơ sở 2</p>
                </div>
            </CSSTransition>
            <div />
        </>
    )
}