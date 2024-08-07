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
      <a
        href="https://www.ubereats.com/ca/store/pita-melt-calgary/E-l_l7KZUk-5PE1tZu8HYQ?diningMode=DELIVERY&ps=1&sc=SEARCH_SUGGESTION"
        className="door-dash uber-eats text-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        Order On UberEats
      </a>
      <a
        href="https://www.skipthedishes.com/pita-melt"
        className="door-dash skip text-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        Order On SkipTheDishes
      </a>
      <h1 className="text-center">
       Please Call{" "}
        <a href="tel:+14032935809" className="number">
          (403)293-5809
        </a>{" "}
        for pickup.
      </h1>
    </div>
  );
};

export default Order;
