import React, { useState } from "react";
import "./Header.css";
import PitaMeltLogo1 from "../assets/PitaMeltLogo1.jpg";
import HamburgerMenu from "../HamburgerMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <img src={PitaMeltLogo1} alt="Pita Melt Logo" />
      <button className="menu-toggle" onClick={toggleMenu}>
        {/* Hamburger Icon */}
      </button>
      {/* <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
        <a href="home">Home</a>
        <a href="menu">Menu</a>
        <a href="aboutus">About</a>
        <a href="contactus">Contact</a>
        <a href="orderonline">OrderOnline</a>
        <a href="catering">Catering</a>
      </nav> */}
      <HamburgerMenu />
    </header>
  );
};

export default Header;
