import React, { useState, useEffect, useRef } from "react";
import "./HamburgerMenu.css";
import { Link } from "react-router-dom";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="hamburgermenu-container">
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        {/* Hamburger Icon */}
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {/* Menu Items: Shown or hidden based on isOpen state */}
      <div className={`menu ${isOpen ? "open" : ""}`} ref={menuRef}>
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/menu" onClick={toggleMenu}>
          Menu
        </Link>
        <Link to="/order" onClick={toggleMenu}>
          Order
        </Link>
        <Link to="/catering" onClick={toggleMenu}>
          Catering
        </Link>
        {/* <Link to="/about" onClick={() => setIsOpen(!isOpen)}>
          About
        </Link> */}
      </div>
    </nav>
  );
}

export default HamburgerMenu;
