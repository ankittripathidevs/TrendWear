import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import {
  FaInstagram,
  FaPinterest,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="Footer-Logo" />
        <p>
          Trend<span>Wear</span>
        </p>
      </div>

      <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <FaInstagram size={30} color="#E4405F" />
        </div>

        <div className="footer-icons-container">
          <FaWhatsapp size={30} color="#25D366" />
        </div>

        <div className="footer-icons-container">
          <FaPinterest size={30} color="#BD081C" />
        </div>

        <div className="footer-icons-container">
          <FaYoutube size={30} color="#FF0000" />
        </div>
      </div>

      <div className="footer-copyright">
        <hr />© 2025 AnkitTripathi.dev. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
