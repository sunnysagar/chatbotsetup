import React from "react";

const ScrollNavbar = ({ scrollToPricing, scrollToContact }) => {
  return (
    <nav className="scroll-navbar">
      <ul>
        <li onClick={scrollToPricing}>Pricing</li>
        <li onClick={scrollToContact}>Contact Us</li>
      </ul>
    </nav>
  );
};

export default ScrollNavbar;
