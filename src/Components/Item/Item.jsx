import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  // console.log(props);

  return (
    <div className="item">
      {/* Relative Path (./product/${props.id}) */}
      {/* Absolute Path (/product/${props.id}) ✅ */}

      <Link to={`/product/${props.id}`}>
        <img
          src={props.image}
          alt="Image"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </Link>

      <p>{props.name}</p>

      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
