import React from "react";
import "./Catering.css";
const Catering = () => {
  return (
    <div className="catering">
      <h1 className="text-center">
        For all your catering needs give us a call at{" "}
        <a href="tel: to +1(403) 293-5809" className="ph-number">
          (403) 293-5809{" "}
        </a>
        during business hours!
      </h1>
    </div>
  );
};

export default Catering;
