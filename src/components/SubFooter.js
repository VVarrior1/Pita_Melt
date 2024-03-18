import React from "react";
import "./SubFooter.css"; // Make sure to import the CSS file

const SubFooter = () => {
  return (
    <div className="about-us-section">
      <div className="about-us-content">
        <h2 className="about-us-title">OUR LOCATION</h2>
        <p className="about-us-address">
          <span style={{ color: "white" }}> 7196 Temple Dr NE #22</span>
        </p>
        <p className="about-us-phone">
          <span style={{ fontWeight: "bold" }}>Phone: </span>
          <span style={{ color: "white" }}> 403-123-4567 </span>
        </p>
      </div>
    </div>
  );
};

export default SubFooter;
