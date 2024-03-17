import React from "react";
import "./Home.css";
import { FaPhone } from "react-icons/fa"; // Importing phone icon from 'react-icons/fa'
import { FaLocationArrow } from "react-icons/fa";
const Home = () => {
  return (
    <div className="beforeHome">
      <div className="home">
        <h6 className="dev">Website currently under development!</h6>
        <div className="bg"></div>
        <h3 className="homeTitle">PitaMelt</h3>
        <h5 className="homeText">
          Discover YYC's favorite: authentic, spice-infused Shawarma crafted
          from a cherished family recipe. Taste the difference at PitaMelt! Call
          now to make an order.
        </h5>
        <h5 className="homeText number">
          <span className="call">
            <FaPhone className="call_icon" />
            <section className="call_text">(403) 123-4567</section>
            <a
              className="call-button"
              href="tel:+15878916940"
              target="_blank"
              rel="noopener noreferrer"
            >
              Call
            </a>
          </span>
        </h5>{" "}
        <h5 className="homeText number">
          <span className="location">
            <FaLocationArrow />
            <section className="call_text">7196 Temple Dr NE #22</section>
            <a
              className="directions-button"
              href="https://www.google.com/maps/place/Pita+Melt/@51.0910056,-113.9601932,17z/data=!3m1!4b1!4m6!3m5!1s0x537165999ba27e9d:0xaecd44cde6595fe2!8m2!3d51.0910056!4d-113.9576183!16s%2Fg%2F11vpyktkj2?entry=ttu
              "
              target="_blank"
              rel="noopener noreferrer"
            >
              Directions
            </a>
          </span>{" "}
        </h5>
      </div>
    </div>
  );
};

export default Home;
