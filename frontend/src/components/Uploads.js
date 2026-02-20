import React from "react";
import API from "../services/api";
import "./upload.css";

function Upload({ setRefresh }) {

  const handleUpload = async (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("file", file);

    try {
      await API.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      alert("File uploaded successfully!");
      setRefresh(prev => !prev);

    } catch (error) {
      console.error(error);
      alert("Upload failed");
    }
  };

 return (
  <div className="upload-card">
    <h3 className="upload-title">Upload CSV</h3>
    <input type="file" className="upload-input" onChange={handleUpload} />
  </div>
);

}

export default Upload;
