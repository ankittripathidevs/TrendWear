import React, { useState, useContext, useRef } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContextCreated } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/nav_dropdown.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  // useContext
  const { getTotalCartItems } = useContext(ShopContextCreated);
  const menuRef = useRef();

  const dropDown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");

    // remove box-shadow
    if (window.innerWidth <= 834) {
      document.querySelector(".navbar").classList.toggle("no-shadow");
    }
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>Trend<span>Wear</span></p>
      </div>

      <img
        className="nav-dropdown"
        onClick={dropDown_toggle}
        src={nav_dropdown}
        alt=""
      />

      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link
            to="/mens"
            style={{ textDecoration: "none" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Men
          </Link>
          {menu === "mens" && <hr />}
        </li>

        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link
            to="/womens"
            style={{ textDecoration: "none" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Women
          </Link>
          {menu === "womens" && <hr />}
        </li>

        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link
            to="/kids"
            style={{ textDecoration: "none" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Kids
          </Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Login
          </button>
        </Link>

        <Link to="/cart">
          <img
            src={cart_icon}
            alt="cartIcon"
            onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
          />
        </Link>

        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
