import React from "react";
import "./Breadcrum.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrum = ({ product }) => {
  return (
    <div className="breadcrum">
      HOME
      <img src={arrow_icon} alt="Arrow-Icon" />
      SHOP
      <img src={arrow_icon} alt="Arrow-Icon" />
      {product.category}
      <img src={arrow_icon} alt="Arrow-Icon" />
      <span>{product.name}</span>
    </div>
  );
};

export default Breadcrum;
