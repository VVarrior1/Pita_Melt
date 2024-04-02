// Footer.js
import React from "react";
import "./Footer.css"; // Import the CSS file for styling
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright 2024 © Pita Melt. All rights Reserved.
        <a className="instagram-icon"
          href="https://www.instagram.com/pitameltyyc/"
          target="_blank"
          rel="noopenr noreferrer"
        >
          {" "}
          <FaInstagram />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
