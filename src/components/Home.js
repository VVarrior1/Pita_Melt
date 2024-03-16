import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="beforeHome">
      <div className="home">
        <div className="bg"></div>
        <h3 className="homeTitle">PitaMelt, The Best Shawarma In YYC</h3>
        <h5 className="homeText">
          Discover YYC's favorite: authentic, spice-infused Shawarma crafted
          from a cherished family recipe. Taste the difference at PitaMelt! Call
          now to make an order.
        </h5>
        <h5 className="homeText number">
          <span className="subtitle">Order Pickup:</span> (403) 123-4567
        </h5>{" "}
        <h5 className="homeText number">
          <span className="subtitle">Location:</span> 7196 Temple Dr NE #22
        </h5>
      </div>
    </div>
  );
};

export default Home;
