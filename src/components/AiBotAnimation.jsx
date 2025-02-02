import React from "react";
import { motion } from "framer-motion";


import "../Style.css";

const AiBotAnimation = ({aivideo}) => {
  return (
    <motion.div
      className="ai-bot" 
    >
      {/* Animated AI Robot */}
      <video autoPlay loop muted className="ai-bot-video">
      <source src={aivideo} type="video/mp4" />
      </video>
    </motion.div>
  );
};

export default AiBotAnimation;
