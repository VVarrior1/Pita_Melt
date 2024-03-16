import React from "react";
import "./MenuItem.css"; // Adjust the path according to your file structure

const MenuItem = ({ name, picture, price }) => {
  return (
    <div className="MenuItem">
      <img
        src={picture}
        alt={name}
        style={{ width: "300px", height: "169px" }}
      />
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  );
};

export default MenuItem;
