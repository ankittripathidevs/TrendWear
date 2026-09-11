import React, { useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContextCreated } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props; // Destructuring
  const { addToCart } = useContext(ShopContextCreated); // usecontext

  return (
    <div className="productDisplay">
      <div className="productDisplay-left">
        {/* List */}
        <div className="productDisplay-img-list">
          <img src={product.image} alt="Image" />
          <img src={product.image} alt="Image" />
          <img src={product.image} alt="Image" />
          <img src={product.image} alt="Image" />
        </div>

        {/* main */}
        <div className="productDisplay-img">
          <img className="productDisplay-main-img" src={product.image} alt="Image" />
        </div>
      </div>

      <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="productDisplay-right-stars">
          <img src={star_icon} alt="Image" />
          <img src={star_icon} alt="Image" />
          <img src={star_icon} alt="Image" />
          <img src={star_icon} alt="Image" />
          <img src={star_dull_icon} alt="Image" />
          <p>(122)</p>
        </div>

        <div className="productDisplay-right-prices">
          <div className="productDisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productDisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>

        <div className="productDisplay-right-description">
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div>

        <div className="productDisplay-right-size">
          <h1>Select Size</h1>
          <div className="prductDisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>

        <p className="productDisplay-right-category">
          <span>Category :</span>Women, T-Shirt, Crop Top,
        </p>

        <p className="productDisplay-right-category">
          <span>Tags :</span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
