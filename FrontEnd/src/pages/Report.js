import React from "react";
import styles from "../styles/Report.module.scss";
import NavbarSPSO from "../components/Navbar/NavbarSPSO";

function Statistics ({ profit, numberOFPages }) {
   return (
   <div className={styles.statistics}>
            <div className={styles.stat_box}>
                <div className={styles.stat_title}>DOANH THU</div>
                <p>{profit} VNĐ</p>
            </div>
            <div className={styles.stat_box}>
                <div className={styles.stat_title}>SỐ TRANG ĐÃ IN</div>
                <p>{numberOFPages}</p>
            </div>
    </div>
   );
}
function MachineStatus ({ activeMachines, inactiveMachines }) {
    const totalMachines = activeMachines + inactiveMachines;
    const activeRate = ((activeMachines / totalMachines) * 100).toFixed(2);

    return (
    <div className={styles.machine_status}>
        <div className={styles.machine_title}>Tỷ lệ máy in đang hoạt động là: {activeRate}%</div>
        <div className={styles.status}>
            <div className={styles.status_box}>
                <h4>Đang hoạt động</h4>
                <p>{activeMachines}</p>
            </div>
            <div className={styles.status_box}>
                <h4>Không hoạt động</h4>
                <p>{inactiveMachines}</p>
            </div>
        </div>
    </div>
    );
}

function Report () {
  return (
    <>
    <NavbarSPSO />
    <div className={styles.report_container}>
        <div className={styles.filters}>
            <div>
                <label>Mốc thời gian</label>
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

        <Statistics profit="12,345,678" numberOFPages={1024} />

        <div className={styles.machine_usage}>
            <div className={styles.usage_title}>THỐNG KÊ MÁY IN ĐƯỢC SỬ DỤNG NHIỀU NHẤT</div>
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

        <MachineStatus activeMachines={45} inactiveMachines={5} />

      <button className={styles.print_button}>In báo cáo</button>
    </div>
    </>
  );
};

export default Report;
