import React, { useState } from "react";
import "./Header.css";
import PitaMeltLogo1 from "../assets/PitaMeltLogo1.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <img src={PitaMeltLogo1} alt="Pita Melt Logo" />
      <h1 className="title">Pita Melt</h1>
      <button className="menu-toggle" onClick={toggleMenu}>
        {/* Hamburger Icon */}
      </button>
      <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
        <a href="home">Home</a>
        <a href="menu">Menu</a>
        <a href="aboutus">AboutUs</a>
      </nav>
    </header>
  );
};

export default Header;
