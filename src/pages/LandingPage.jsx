import React, { useState } from "react";
import '../Style.css';
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import AiBotAnimation from "../components/AiBotAnimation";
import AnimatedButton from "../components/SetUpButton";


import setupVid from "../assets/setup.mp4";
import leftChat from "../assets/left_chat.jpg"
import rightChat from "../assets/right_chat.png"
import chatbotIcon from "../assets/chatbot.png"
import aiBotVideo from "../assets/ai-bot.mp4";
import ContactFooter from "../components/ContactFooter";

const LandingPage = () => {

  const [center, setCenter] = useState("video"); // Default center element

  const handleHover = (element) => {
    setCenter(element);
  };
   

    return (
        <div className="landing-page">
          {/* Include Navbar */}
          <Navbar />
    
          {/* Main Section */}
          <div className="main-content">
            {/* Left: AI Bot Animation */}
            <div className="left">
              <AiBotAnimation aivideo={aiBotVideo} />
            </div>
    
            {/* Right: Icons and Chatbot features */}
            <div className="right">
            <motion.div
                className="carousel"
                initial={{ rotateY: 0 }}
                animate={{
                  rotateY: center === "left" ? -15 : center === "right" ? 15 : 0,
                }}
                transition={{ type: "spring", stiffness: 80 }}
              > 
                 <div className="right-top">
                    <motion.div
                    className={`left-image ${center === "left" ? "active" : ""}`}
                    initial={{ scale: 1.1, rotateY: -10, rotateX: 5, y: -10 }}
                    animate={{ scale: 1.1, rotateY: -10, rotateX: 5, y: -10 }}
                    transition={{ type: "spring", stiffness: 80 }}
                    onHoverStart={() => handleHover("left")}
                    >
                    <img src={leftChat} alt="Left Chat Illustration" />
                    </motion.div>

                    {/* Center Video */}
                    <motion.div 
                   className={`video-container ${center === "video" ? "active" : ""}`}
                   onHoverStart={() => handleHover("video")}
                    initial={{ scale: 1.1, rotateY: 0, rotateX: 5, y: -5 }}
                    animate={{ scale: 1.1, rotateY: 0, rotateX: 5, y: -5 }}
                    transition={{ type: "spring", stiffness: 80 }}>
                    <video autoPlay loop muted className="ai-chat-video">
                        <source src={setupVid} type="video/mp4" />
                    </video>
                    </motion.div>

                    {/* Right Image with 3D Animation */}
                    <motion.div
                     className={`right-image ${center === "right" ? "active" : ""}`}
                     onHoverStart={() => handleHover("right")}
                    initial={{ scale: 1.1, rotateY: 10, rotateX: 5, y: 30 }}
                    animate={{ scale: 1.1, rotateY: 10, rotateX: 5, y: 30 }}
                    transition={{ type: "spring", stiffness: 80 }}
                    >
                    <img src={rightChat} alt="Right Chat Illustration" />
                    </motion.div>
            
                </div>
              </motion.div>
               

                <div className= "right-bottom">
                     <AnimatedButton text = {"Setup Your Button"} />
                </div>
              
            </div>

          
          </div>

          <div className="chatbot-icon">
            <img src={chatbotIcon} alt="chatbot" />
          </div>

          <ContactFooter />
        </div>
      );
};

export default LandingPage;
