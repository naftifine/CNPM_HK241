import React from "react";
import styles from "../styles/PrintSettings.module.scss";
import NavbarStudent from "../components/Navbar/NavbarStudent";

function PrintSettings () {
  return (
    <>
    <NavbarStudent/>
    <div className={styles.print_settings_container}>
      <div className={styles.header}>
        <p>
          <span>L08_BÀI TẬP THUYẾT TRÌNH</span> <a href="#">Thay đổi file</a>
        </p>
      </div>

      <div className={styles.page_remaining}>
        <span>Số trang còn lại: 15</span>
      </div>

      <div className={styles.settings}>
        <div className={styles.setting_group}>
          <h3>Printer</h3>
          <div className={styles.printer}>
            <i className={styles.icon_printer}></i>
            <span>Máy in</span>
            <a href="#">Chọn máy in</a>
          </div>
        </div>

        <div className={styles.setting_group}>
          <h3>Setting</h3>
          <div className={styles.setting_options}>
            <div className={styles.option}>
              <div>
                <i className={styles.icon_file}></i>
                <span>Print All Pages</span>
                <p>The whole thing</p>
              </div>
              <select>
                <option>Print All Pages</option>
                <option>Custom Pages</option>
              </select>
            </div>

            <div className={styles.option}>
              <div>
                <i className={styles.icon_document}></i>
                <span>Letter</span>
                <p>21.59 cm x 27.94 cm</p>
              </div>
              <select>
                <option>Letter</option>
                <option>A4</option>
                <option>A5</option>
              </select>
            </div>

            <div className={styles.option}>
              <div>
                <i className={styles.icon_page}></i>
                <span>Print One Sided</span>
                <p>Only print on one side of the page</p>
              </div>
              <select>
                <option>Print One Sided</option>
                <option>Duplex Print</option>
              </select>
            </div>

            <div className={styles.option}>
              <div>
                <i className={styles.icon_orientation}></i>
                <span>Portrait Orientation</span>
              </div>
              <select>
                <option>Portrait</option>
                <option>Landscape</option>
              </select>
            </div>

            <div className={styles.option}>
              <div>
                <i className={styles.icon_margins}></i>
                <span>Normal Margins</span>
                <p>Top: 2.54 cm Bottom: 2.54 cm</p>
              </div>
              <select>
                <option>Normal Margins</option>
                <option>Wide Margins</option>
                <option>Custom Margins</option>
              </select>
            </div>

            <div className={styles.option}>
              <div>
                <i className={styles.icon_pages}></i>
                <span>1 Page Per Sheet</span>
              </div>
              <select>
                <option>1 Page Per Sheet</option>
                <option>2 Pages Per Sheet</option>
              </select>
            </div>
          </div>
        </div>

        <div className={styles.print}>
          <div className={styles.copies}>
            <label>Copies:</label>
            <input type={styles.number} defaultValue={1} min={1} />
          </div>
          <button className={styles.print_button}>
            <i className={styles.icon_print}></i>
          </button>
        </div>
      </div>

      <button className={styles.back_button}>Trở lại</button>
    </div>
    </>
  );
};

export default PrintSettings;
