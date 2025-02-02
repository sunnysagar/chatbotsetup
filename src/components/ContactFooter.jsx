
import React from "react";
import { motion } from "framer-motion";
import "../Style.css";

import logo from "../assets/logo.png";

const Contactcontact = () => {
  return (
    <footer className="contact-contact">
      <div className="contact-contain">
        <div className="contact-left">
          <div className="logo-title">
            <img src={logo} alt="logo" />
            <div className="title-sub">
              <h2 className="contact-company-name">Beyond Chats</h2>
              <p className="contact-subtitle">Think Beyond Limit</p>
            </div>
          </div>
          {/* Social Media Icons Section */}
          <ul className="social-media-icons">
            <li>
              <a
                href="https://www.facebook.com/login/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter" aria-hidden="true"></i>
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-youtube" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.telegram.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-telegram" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="contact-center">
          <h3>Important Links</h3>
          <ul className="contact-links">
            {[
              "Home",
              "Services",
              "Career",
              "Contact Us",
              "About Us",
              "Client Case Study",
            ].map((link, index) => (
              <motion.li
                key={index}
                className="contact-link-item"
                whileHover={{ scale: 1.1, color: "#e0f7fa" }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                  className="contact-link"
                >
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="featues-list">
          <h3>Featured Services </h3>
          <ul className="contact-links">
            {[
              "Solutions &Verticals",
              "AI Fast Solutions",
              "Stock Market Analysis",
              "AI Integrations",
            ].map((link, index) => (
              <motion.li
                key={index}
                className="contact-link-item"
                whileHover={{ scale: 1.1, color: "#e0f7fa" }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                  className="contact-link"
                >
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="contact-right">
          <h3>Contact Us</h3>
          <p>123, Innovoa Street, Bangalore, Karnataka, India</p>
          <p>Phone: +91 12345 67890</p>
          <p>Email: contact@innovoaplace.com</p>
        </div>
      </div>

      <div className="horizontal-line"></div>

      <p className="contact-subtitle">
        © 2025 Beyond Chats | All rights reserved.
      </p>
    </footer>
  );
};

export default Contactcontact;
