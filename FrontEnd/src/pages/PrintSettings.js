import React from "react";
import styles from "../styles/PrintSettings.module.scss";
import NavbarStudent from "../components/Navbar/NavbarStudent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faPrint, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
function PrintSettings() {
  const navigate = useNavigate();
  const { filename } = useParams();
  return (
    <>
      <NavbarStudent />
      <div className={styles.print_settings_container}>
        <div className={styles.header}>
          <p>
            <FontAwesomeIcon icon={faFile} /> <span>     {filename}</span> <a href="/print">Thay đổi file</a>

          </p>
          <p className={styles.page_remaining}><span >Số trang còn lại: 15</span></p>
        </div>

        <div className={styles.settings}>
          <div className={styles.setting_group}>
            <div className={styles.printer}>
              <label for="printer-select" className={styles.label}><FontAwesomeIcon icon={faPrint} />       Máy in</label>
              <select id="printer-select" className={styles.select}>
                <option value=" H1" selected>Máy in Sảnh H1</option>
                <option value="H2">Máy in Sảnh H2</option>
                <option value="H3">Máy in Sảnh H3</option>
                <option value="H6">Máy in Sảnh H6</option>
              </select>
            </div>
          </div>

          <div className={styles.setting_group}>
            <h3><FontAwesomeIcon icon={faFileLines} />   Setting</h3>
            <div className={styles.setting_options}>
              <div className={styles.option}>
                <select id="pages-select" className={styles.select}>
                  <option value="ALL" selected>Print All Pages</option>
                  <option value="Custom">Custom Pages</option>
                  <option value="Current">Print Current Page</option>
                </select>
              </div>

              <div className={styles.option}>
                <select id="size-select" className={styles.select}>
                  <option value="Letter">Letter</option>
                  <option value="A4">A4</option>
                  <option value="A5">A5</option>
                </select>
              </div>

              <div className={styles.option}>
                <select id="format-select" className={styles.select}>
                  <option value="One Sided">Print One Sided</option>
                  <option value="Duplex">Duplex Print</option>
                </select>
              </div>

              <div className={styles.option}>
                <select id="orientation-select" className={styles.select}>
                  <option value="Portrait">Portrait</option>
                  <option value="Landscape">Landscape</option>
                </select>
              </div>

              <div className={styles.option}>
                <select id="margin-select" className={styles.select}>
                  <option value="Normal">Normal Margins</option>
                  <option value="Wide">Wide Margins</option>
                  <option value="Custom">Custom Margins</option>
                </select>
              </div>

              <div className={styles.option}>
                <select id="page-per-sheet-select" className={styles.select}>
                  <option value="1">1 Page Per Sheet</option>
                  <option value="2">2 Pages Per Sheet</option>
                </select>
              </div>
            </div>
          </div>

          <div className={styles.print}>
            <div className={styles.copies}>
              <label>Copies:</label>
              <input className={styles.number} type="number" defaultValue={1} min={1} />
            </div>
            <div className={styles.print_button} onClick={() => navigate(`/bill/${filename}`)}>
              <FontAwesomeIcon icon={faPrint} />
            </div>
          </div>
        </div>

        <button className={styles.back_button} onClick={() => navigate('/print')}>Trở lại</button>
      </div>
    </>
  );
};

export default PrintSettings;
