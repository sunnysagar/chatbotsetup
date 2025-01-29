import React from "react";
import { motion } from "framer-motion";
import { AiFillSetting } from "react-icons/ai";
import '../Style.css';

function AnimatedButton({text}) {
    return (
        <motion.button
        className="learn-more-button"
        whileHover={{
            scale: 1.1,
            background: "linear-gradient(135deg, #3b82f6, #9333ea)", 
            color: "#fff",
            boxShadow: "0px 8px 15px rgba(147, 51, 234, 0.3)", 
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
    >
    <AiFillSetting size={24} /> {text}
    </motion.button>
    );
}

export default AnimatedButton;
