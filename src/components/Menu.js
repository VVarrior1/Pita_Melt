import React from "react";
import MenuItem from "./MenuItem";
import "./Menu.css";
import shawarmawrap from "../assets/shawarmawrap.jpg";

const Menu = () => {
  return (
    <div className="Menu">
      <MenuItem name="Shawarma" picture={shawarmawrap} price={9.99} />
      <MenuItem name="Shawarma" picture={shawarmawrap} price={9.99} />
      <MenuItem name="Shawarma" picture={shawarmawrap} price={9.99} />
      <MenuItem name="Shawarma" picture={shawarmawrap} price={9.99} />
      <MenuItem name="Shawarma" picture={shawarmawrap} price={9.99} />
      <MenuItem name="Shawarma" picture={shawarmawrap} price={9.99} />
      <MenuItem name="Shawarma" picture={shawarmawrap} price={9.99} />
      <MenuItem name="Shawarma" picture={shawarmawrap} price={9.99} />
      <MenuItem name="Shawarma" picture={shawarmawrap} price={9.99} />
    </div>
  );
};

export default Menu;
