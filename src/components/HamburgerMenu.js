import React, { useState, useEffect, useRef } from "react";
import "./HamburgerMenu.css";
import { Link } from "react-router-dom";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null); // Ref for the hamburger icon

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        // Check if the click is not on the hamburger icon
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
      {/* Add the ref to the div that wraps the hamburger icon */}
      <div
        ref={hamburgerRef}
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
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
        {/* Additional menu items here */}
      </div>
    </nav>
  );
}

export default HamburgerMenu;
