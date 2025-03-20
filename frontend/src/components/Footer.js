import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Rim Enterprises</h4>
          <p>Providing quality services with trust and excellence.</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: rimenterprises@hotmail.com</p>
          <p>Phone:+27 65 893 1828</p>
          <p>Address:18 San Bernadino
Langerveld Road 
Midrand
1686</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://www.facebook.com/login/" className="social-icon fb"><FaFacebook /></a>
            <a href="https://x.com/i/flow/login" className="social-icon tw"><FaTwitter /></a>
            <a href="https://www.linkedin.com/feed/" className="social-icon ln"><FaLinkedin /></a>
            <a href="https://www.instagram.com/accounts/login/" className="social-icon ig"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Rim Enterprises. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;