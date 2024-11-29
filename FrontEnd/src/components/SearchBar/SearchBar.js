import React, { useState } from "react";
import "./SearchBar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function SearchBar({ setDisplayText }) {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    setDisplayText(value); // Cập nhật dữ liệu lên cha
  };

  return (
    <div className="search-bar">
      <FontAwesomeIcon icon="fas fa-search" className="search-icon" />
      <input
        type="text"
        placeholder="Tìm kiếm..."
        value={searchValue}
        onChange={handleInputChange} // Gọi hàm xử lý khi nhập
        className="search-input"
      />
      {/* <button className="search-button">Tìm</button> */}
    </div>
  );
}

export default SearchBar;
