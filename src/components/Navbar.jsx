import React, {useState} from "react";
import AuthModal from "./AuthModal";
import { FaMoneyBillWave, FaEnvelope, FaUser } from "react-icons/fa"; // Import required icons
import "../Style.css"; // Ensure the CSS file is linked correctly

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
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
        <button className="auth-btn" onClick={() => setModalOpen(true)}>
            <FaUser /> Sign In / Sign Up
      </button>
      </nav>

      <AuthModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </header>
  );
};

export default Navbar;
