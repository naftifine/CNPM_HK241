import React, { useState } from 'react';
import './Uploadfile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowUp } from '@fortawesome/free-solid-svg-icons';

const FileUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (!file) {
            alert('Please select a file first.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        fetch('/upload', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => alert('File uploaded successfully!'))
            .catch(error => alert('Error uploading file.'));
    };
    return (
        <div className="upload-container">
            <div className="file-input-wrapper">
                <input type="file" id="fileInput" className="file-input" onChange={handleFileChange} />
                <label htmlFor="fileInput" className="file-input-label">
                    Choose File
                </label>
            </div>
            {file && (
                <div className="file-name">
                    <p>{file.name}</p>
                </div>
            )}
            {file && (
                <button className="upload-btn" onClick={handleUpload} >
                    <FontAwesomeIcon icon={faFileArrowUp} style={{ color: "#000" }} />
                </button>
            )}
        </div>
    );
};

export default FileUpload;
