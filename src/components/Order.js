import React from "react";
import "./Order.css";

const Order = () => {
  return (
    <div className="order">
      <a
        href="https://www.doordash.com/store/pita-melt-calgary-28059696/?event_type=autocomplete&pickup=false"
        className="door-dash text-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        Order On DoorDash
      </a>
      <h1 className="text-center">
        UberEats and SkipTheDishes Coming soon! Call{" "}
        <a href="tel:+14032935809" className="number">
          (403)293-5809
        </a>{" "}
        for pickup.
      </h1>
    </div>
  );
};

export default Order;
