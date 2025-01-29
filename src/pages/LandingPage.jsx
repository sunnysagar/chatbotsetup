import React from "react";
import '../Style.css';
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import AiBotAnimation from "../components/AiBotAnimation";
import AnimatedButton from "../components/SetUpButton";

import setupVid from "../assets/setup.mp4";
import leftChat from "../assets/left_chat.jpg"
import rightChat from "../assets/right_chat.png"

const LandingPage = () => {
    return (
        <div className="landing-page">
          {/* Include Navbar */}
          <Navbar />
    
          {/* Main Section */}
          <div className="main-content">
            {/* Left: AI Bot Animation */}
            <div className="left">
              <AiBotAnimation />
            </div>
    
            {/* Right: Icons and Chatbot features */}
            <div className="right">
                <div className="right-top">
                    <motion.div
                    className="left-image"
                    initial={{ scale: 1.1, rotateY: -10, rotateX: 5, y: -10 }}
                    animate={{ scale: 1.1, rotateY: -10, rotateX: 5, y: -10 }}
                    transition={{ type: "spring", stiffness: 80 }}
                    >
                    <img src={leftChat} alt="Left Chat Illustration" />
                    </motion.div>

                    {/* Center Video */}
                    <motion.div 
                    className="video-container"
                    initial={{ scale: 1.1, rotateY: 0, rotateX: 5, y: -5 }}
                    animate={{ scale: 1.1, rotateY: 0, rotateX: 5, y: -5 }}
                    transition={{ type: "spring", stiffness: 80 }}>
                    <video autoPlay loop muted className="ai-chat-video">
                        <source src={setupVid} type="video/mp4" />
                    </video>
                    </motion.div>

                    {/* Right Image with 3D Animation */}
                    <motion.div
                    className="right-image"
                    initial={{ scale: 1.1, rotateY: 10, rotateX: 5, y: 30 }}
                    animate={{ scale: 1.1, rotateY: 10, rotateX: 5, y: 30 }}
                    transition={{ type: "spring", stiffness: 80 }}
                    >
                    <img src={rightChat} alt="Right Chat Illustration" />
                    </motion.div>
            
                </div>

                <div className= "right-bottom">
                     <AnimatedButton text = {"Setup Your Button"} />
                </div>
              
            </div>

          
          </div>
        </div>
      );
};

export default LandingPage;
