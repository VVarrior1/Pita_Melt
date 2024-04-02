import "./Header.css";
import PitaMeltLogo1 from "../assets/PitaMeltLogo1.jpg";
import HamburgerMenu from "./HamburgerMenu";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <img className="img1" src={PitaMeltLogo1} alt="Pita Melt Logo" />

      <nav className="main-menu">
        <Link to="/">Home</Link>
        <h1 className="breaker">|</h1>
        <Link to="/menu">Menu</Link>
        <h1 className="breaker">|</h1>
        <Link to="/order">Order</Link>
        <h1 className="breaker">|</h1>
        <Link to="/catering">Catering</Link>
        <a
          className="instagram-icon"
          href="https://www.instagram.com/pitameltyyc/"
          target="_blank"
          rel="noopenr noreferrer"
        >
          {" "}
          <FaInstagram />
        </a>
        {/* <h1 className="breaker">|</h1> */}
        {/* <Link to="/about">About</Link> */}
      </nav>
      <HamburgerMenu />
    </header>
  );
};

export default Header;
