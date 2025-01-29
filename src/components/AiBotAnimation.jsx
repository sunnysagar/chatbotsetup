import React from "react";
import { motion } from "framer-motion";
import aiBotVideo from "../assets/ai-bot.mp4";

import "../Style.css";

const AiBotAnimation = () => {
  return (
    <motion.div
      className="ai-bot"
      
    >
      {/* Animated AI Robot */}
      <video autoPlay loop muted className="ai-bot-video">
      <source src={aiBotVideo} type="video/mp4" />
      </video>
    </motion.div>
  );
};

export default AiBotAnimation;
