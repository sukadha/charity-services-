import React, { useState } from "react";
import "./clothes.css";
import clothesImage from "./clothes.png";

const Clothes = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
    const urls = files.map(file => URL.createObjectURL(file));
    setPreviewUrls(urls);
  };

  return (
    <div className="container">
      <h1 className="main-heading">Clothes Donation</h1>
      <div className="content-wrapper">
        <div className="form-container">
          <div className="input-row">
            <div className="input-group">
              <label>Name:</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="input-group">
              <label>Address:</label>
              <input type="text" placeholder="Enter your address" />
            </div>
          </div>

          <div className="input-row">
            <div className="input-group">
              <label>Phone No:</label>
              <input type="tel" placeholder="Enter your phone number" />
            </div>
            <div className="input-group">
              <label>Email:</label>
              <input type="email" placeholder="Enter your email" />
            </div>
          </div>

          <div className="image-upload-section">
            <label>Images:</label>
            <input 
              type="file" 
              multiple
              accept="image/*"
              onChange={handleFileChange}
              className="file-input"
            />
            <div className="image-preview">
              {previewUrls.map((url, index) => (
                <img 
                  key={index}
                  src={url}
                  alt={`Preview ${index + 1}`}
                  className="preview-image"
                />
              ))}
            </div>
          </div>

          <button className="donate-button">Donate Now</button>
        </div>
        
        <div className="clothes-image">
          <img src={clothesImage} alt="Clothes" />
        </div>
      </div>
    </div>
  );
};

export default Clothes;