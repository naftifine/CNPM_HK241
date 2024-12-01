import React from "react";
import styles from "../styles/Report.module.scss";

function Report () {
  return (
    <div className={styles.report_container}>
      <div className={styles.header}>
        <h1>Báo cáo</h1>
      </div>

      <div className={styles.filters}>
        <div>
          <label>Tất cả</label>
        </div>
        <div>
          <label>Tháng:</label>
          <select>
            {[...Array(12).keys()].map((month) => (
              <option key={month + 1} value={month + 1}>
                {month + 1}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Năm:</label>
          <select>
            <option value="2024">2024</option>
          </select>
        </div>
      </div>

      <div className={styles.statistics}>
        <div className={styles.stat_box}>
          <h3>DOANH THU</h3>
          <p>12,565,054 VNĐ</p>
        </div>
        <div className={styles.stat_box}>
          <h3>SỐ TRANG ĐÃ IN</h3>
          <p>1024</p>
        </div>
      </div>

      <div className={styles.machine_usage}>
        <h3>THỐNG KÊ MÁY IN ĐƯỢC SỬ DỤNG NHIỀU NHẤT</h3>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Máy in</th>
              <th>Số lần sử dụng</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>H6P5555</td>
              <td>100</td>
            </tr>
            <tr>
              <td>2</td>
              <td>H6P5555</td>
              <td>50</td>
            </tr>
            <tr>
              <td>3</td>
              <td>H6P5555</td>
              <td>45</td>
            </tr>
            <tr>
              <td>4</td>
              <td>H6P5555</td>
              <td>30</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.machine_status}>
        <h3>Tỷ lệ máy in đang hoạt động là: 90%</h3>
        <div className={styles.status}>
          <div className={styles.status_box}>
            <h4>Đang hoạt động</h4>
            <p>50</p>
          </div>
          <div className={styles.status_box}>
            <h4>Không hoạt động</h4>
            <p>5</p>
          </div>
        </div>
      </div>

      <button className={styles.print_button}>In báo cáo</button>
    </div>
  );
};

export default Report;
