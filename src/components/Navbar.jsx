import React, { useState } from "react";
import AuthModal from "./AuthModal";
import {
  FaMoneyBillWave,
  FaEnvelope,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa"; // Import required icons
import "../Style.css"; // Ensure the CSS file is linked correctly
import logo from "../assets/logo.png";

const Navbar = ({ scrollToPricing, scrollToContact }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="logo-nav">
        <img src={logo} alt="logo" />

        <div className="title-sub-nav">
          <h1 className="company-name">Beyond Chat</h1>
          <p className="subtitle">Think Beyond Limit</p>
        </div>
      </div>
      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#pricing" onClick={scrollToPricing}>
          <FaMoneyBillWave /> Pricing
        </a>
        <a href="#contact" onClick={scrollToContact}>
          <FaEnvelope /> Contact Us
        </a>
        <button className="auth-btn" onClick={() => setModalOpen(true)}>
          <FaUser /> Sign In / Sign Up
        </button>
      </nav>
      {/* Hamburger Icon (Mobile) */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <AuthModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </header>
  );
};

export default Navbar;
