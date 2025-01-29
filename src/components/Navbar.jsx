import React from "react";
import { FaMoneyBillWave, FaEnvelope, FaUser } from "react-icons/fa"; // Import required icons
import "../Style.css"; // Ensure the CSS file is linked correctly

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">BeyondChats</div>
      <nav className="nav-links">
        <a href="#pricing">
          <FaMoneyBillWave /> Pricing
        </a>
        <a href="#contact">
          <FaEnvelope /> Contact Us
        </a>
      </nav>

      <div className="nav-links login">
        <a href="#login">
          <FaUser /> SignIn/SingUp
        </a>
      </div>
    </header>
  );
};

export default Navbar;
