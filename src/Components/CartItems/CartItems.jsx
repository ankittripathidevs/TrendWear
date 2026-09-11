import React from "react";
import "./CartItems.css";
import { useContext } from "react";
import { ShopContextCreated } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContextCreated);

  return (
    <div className="cartItems">
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <div key={item.id}>
              {" "}
              {/* Add a unique key here */}
              <div className="cartItem-format  cartItems-format-main">
                <img
                  src={item.image}
                  alt=""
                  className="cartIcon-product-icon"
                />
                <p className="cartItems-title">{item.name}</p>
                <p className="cartItems-price">${item.new_price}</p>
                <button className="cartItems-quantity">
                  {cartItems[item.id]}
                </button>
                <p className="cartItems-dollar">
                  ${item.new_price * cartItems[item.id]}
                </p>
                <img
                  className="cartItems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(item.id);
                  }}
                  alt="Icon-remove"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="cartItems-down">
        {/* cardItems-total */}
        <div className="cartItems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartItems-total-item">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />

            <div className="cartItems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />

            <div className="cartItems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button type="button">PROCEED TO CHECKOUT</button>
        </div>

        {/* cartItems-promocode */}
        <div className="cartItems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartItems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
