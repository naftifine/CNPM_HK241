import React, { useState, useEffect } from 'react';
import styles from '../styles/success.module.scss'
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import '../components/Navbar/NavbarStudent'
import NavbarStudent from '../components/Navbar/NavbarStudent';
function Success() {
    let numpage = 5;
    let price = 500;
    const totalPrice = numpage * price;
    return (
        <>
            <NavbarStudent />
            <div className={styles.information}>
                <h1 className={styles.header}> THÔNG TIN ĐƠN IN</h1>
                <hr></hr>
                <table class={styles.content}>
                    <thead>
                        <tr>Mã số đơn: </tr>
                        <tr>Thời gian: </tr>
                        <tr>Giá (1 tờ):</tr>
                        <tr>Số lượng: </tr>
                        <tr>Tổng tiền: </tr>

                    </thead>
                    <tbody>
                        <tr>H7565</tr>
                        <tr>{new Date().toLocaleTimeString()} - {new Date().toLocaleDateString()}</tr>
                        <tr>{price} VNĐ</tr>
                        <tr>{numpage}</tr>
                        <tr>{totalPrice} VNĐ</tr>

                    </tbody>
                </table>
                <FontAwesomeIcon className={styles.icon_check} icon={faCircleCheck} style={{ color: "#59d251", }} />
                <p>Thanh toán thành công</p>
            </div>
        </>
    )
}
export default Success;