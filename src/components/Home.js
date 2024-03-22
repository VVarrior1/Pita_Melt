import React from "react";
import "./Home.css";
import { FaPhone } from "react-icons/fa"; // Importing phone icon from 'react-icons/fa'
import { FaLocationArrow } from "react-icons/fa";
import SubFooter from "./SubFooter";
import About from "./About";
import DeliciousShawarma from "../assets/shawarmabg.webp";
// import Carousel from "./Carousel";
const Home = () => {
  return (
    <div className="beforeHome">
      {/* <Carousel /> */}
      <div className="bigHome">
        <div className="home">
          {/* <h6 className="dev ">Website currently under development!</h6> */}
          {/* <h3 className="homeTitle">PitaMelt</h3> */}
          <h5 className="homeText number">
            <span className="call">
              <FaPhone className="call_icon" />
              <section className="call_text">(403) 293-5809</section>
              <a
                className="call-button fw-bold"
                href="tel:+1(403) 293-5809"
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
                className="directions-button fw-bold"
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
        <div className="home-image">
          <img src={DeliciousShawarma} className="home-img" alt = "Delicious Shawarma"></img>
        </div>
      </div>
      <About />

      <SubFooter />
    </div>
  );
};

export default Home;
