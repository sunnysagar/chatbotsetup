import React from "react";
import Sidebar from "../components/Sidebar";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import AiBotAnimation from "../components/AiBotAnimation";
import { FaLongArrowAltRight } from "react-icons/fa";

import chatbotIcon from "../assets/chatbot.png";
import BotVideo from "../assets/robot.mp4";
import BotVideo1 from "../assets/robot1.mp4";
import arrowrightup from "../assets/rightup.png";
import leftaiimg from "../assets/backgroundai1.jpg";
import rightaiimg from "../assets/ai-right-hand.png";

import "../Style.css";

const MainDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };

  return (
    <div className="main-dashboard">
      <div className="sidebar-container">
        <Sidebar user={{ name: "Sunny Sagar" }} onLogout={handleLogout} />
      </div>

      <div className="middle-container">

        <div className="bot-section">
          {/* Left Image */}
          <motion.img
            src={leftaiimg}
            alt="Left Decoration"
            className="bot-image left"
            initial={{ scale: 1.1,rotateY: -20,rotateX: 5, y: -20 }}
            animate={{ scale: 1.1,rotateY: -20,rotateX: 5, y: -20 }}
            transition={{ duration: 1 }}
          />

          {/* Bot Animation */}
          <motion.div
            className="bot-animation"
            initial={{ rotateX: 5, y: 5 }}
            animate={{ rotateX: 5, y: 5 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
          >
            <AiBotAnimation aivideo={BotVideo} />
          </motion.div>

          {/* Right Image */}
          <motion.img
            src={rightaiimg}
            alt="Right Decoration"
            className="bot-image right"
            initial={{ scale: 1.1,rotateY: 60,rotateX: 5, y: 50 }}
            animate={{ scale: 1.1,rotateY: 60,rotateX: 5, y: 50 }}
            transition={{ duration: 1 }}
          />
      </div>
        
        <div className="text-btn">
          <div className="text-container">
            <motion.h1
            className="slogan"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Meet Your Bot <br/> AI Assistant 🤖
          </motion.h1>

            <motion.h2 className="sub-slogan"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ duration: 1 }}> 
            All Your Question <br/> will be answered here! 🚀
            </motion.h2>
          </div>
       

        {/* Setup Chatbot Button with Animated Icon */}
        {/* Setup Chatbot Button with Multi-Layered Arrow Effect */}
        <motion.button
          className="setup-btn1"
          onClick={() => navigate("/setup-chatbot")}
          whileHover={{ scale: 1.1 }}
        >
          <motion.button
            className="setup-btn2"
            onClick={() => navigate("/setup-chatbot")}
            whileHover={{ scale: 1.1 }}
          >
            <motion.button
              className="setup-btn"
              onClick={() => navigate("/setup-chatbot")}
              whileHover={{ scale: 1.1 }}
            >
              <div className="arrow-container">
                <motion.img
                  src={arrowrightup}
                  alt="Arrow 1"
                  className="arrow-image arrow-layer-1"
                  whileHover={{ x: 5, y: -5 }}
                />
                <motion.img
                  src={arrowrightup}
                  alt="Arrow 2"
                  className="arrow-image arrow-layer-2"
                  whileHover={{ x: 8, y: -8 }}
                />
                <motion.img
                  src={arrowrightup}
                  alt="Arrow 3"
                  className="arrow-image arrow-layer-3"
                  whileHover={{ x: 12, y: -12 }}
                />
              </div>
            </motion.button>
          </motion.button>
        </motion.button>
        </div>

      
      </div>

      <div className="chatbot-icon">
        <img src={chatbotIcon} alt="chatbot" />
      </div>
    </div>
  );
};

export default MainDashboard;
