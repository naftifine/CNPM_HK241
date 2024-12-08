import styles from '../styles/InforStudent.module.scss'
import '../components/Navbar/NavbarStudent'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import NavbarStudent from '../components/Navbar/NavbarStudent';
function Inforstudent() {
    const [info, setInfo] = useState([
        {
            name: "Trần Thị Thùy Dương",
            student_id: 2210626,
            major: "Khoa học và Kỹ thuật Máy tính",
            remaining_pages: 50,
            printed_paper: 15
        },
    ]);
    return (
        <>
            <NavbarStudent />
            <div className={styles.information}>
                <h1 className={styles.header}> THÔNG TIN SINH VIÊN</h1>
                <hr></hr>
                <a className={styles.icon}><FontAwesomeIcon icon={faCircleUser} style={{ color: "#000000", }} /></a>
                <table class={styles.content}>

                    <thead>
                        <tr>Họ và tên:</tr>
                        <tr>MSSV:</tr>
                        <tr>Khoa:</tr>
                        <tr>Đã in:</tr>
                        <tr>Số trang còn lại:</tr>

                    </thead>
                    <tbody>
                        {info.map((info, index) => (
                            <tr key={index}>
                                <tr>{info.name}</tr>
                                <tr>{info.student_id}</tr>
                                <tr>{info.major}</tr>
                                <tr>{info.remaining_pages} trang</tr>
                                <tr>{info.printed_paper} trang</tr>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Inforstudent;