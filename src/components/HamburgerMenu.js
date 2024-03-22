import React, { useState } from "react";
import "./HamburgerMenu.css";
import { Link } from "react-router-dom";
function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="hamburgermenu-container">
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Hamburger Icon */}
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {/* Menu Items: Shown or hidden based on isOpen state */}
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(!isOpen)}>
          Home
        </Link>
        <Link to="/menu" onClick={() => setIsOpen(!isOpen)}>
          Menu
        </Link>
        <Link to="/order" onClick={() => setIsOpen(!isOpen)}>
          Order
        </Link>
        <Link to="/catering" onClick={() => setIsOpen(!isOpen)}>
          Catering
        </Link>
        <Link to="/about" onClick={() => setIsOpen(!isOpen)}>
          About
        </Link>
      </div>
    </nav>
  );
}

export default HamburgerMenu;
