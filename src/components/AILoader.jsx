// components/ProLoader.jsx
import React from "react";
import './AILoader.css';

function ProLoader({ message = "Generating AI Email..." }) {
  return (
    <div className="pro-loader-overlay">
      <div className="pro-loader-container">
        <div className="pro-spinner">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="pro-loader-text">{message}</p>
      </div>
    </div>
  );
}

export default ProLoader;