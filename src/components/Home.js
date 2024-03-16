import React from "react";
import "./Home.css";
import { FaPhone } from "react-icons/fa"; // Importing phone icon from 'react-icons/fa'
import { FaLocationArrow } from "react-icons/fa";
const Home = () => {
  return (
    <div className="beforeHome">
      <div className="home">
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
          </span>
        </h5>{" "}
        <h5 className="homeText number">
          <span className="location">
            <FaLocationArrow />

            <section className="call_text">7196 Temple Dr NE #22</section>
          </span>{" "}
        </h5>
      </div>
    </div>
  );
};

export default Home;
