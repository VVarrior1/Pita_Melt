import React, { useState } from "react";
import "./HamburgerMenu.css";
function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
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
        <a href="/home">Home</a>
        <a href="/menu">Menu</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/order">Order Online</a>
        <a href="/catering">Catering</a>
      </div>
    </nav>
  );
}

export default HamburgerMenu;
