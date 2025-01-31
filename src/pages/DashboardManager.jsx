import React from "react";
import Sidebar from "../components/Sidebar";
import { auth } from "../../firebase";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

import AiBotAnimation from "../components/AiBotAnimation";
import { FaLongArrowAltRight } from "react-icons/fa";

import chatbotIcon from "../assets/chatbot.png";
// import BotVideo from "../assets/robot.mp4";
// import BotVideo1 from "../assets/robot1.mp4";
// import arrowrightup from "../assets/rightup.png";
// import leftaiimg from "../assets/backgroundai1.jpg";
// import rightaiimg from "../assets/ai-right-hand.png";

import "../Style.css";

const DashboardManager = ({ children }) => {

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };

  return (
    <div className="dashboard-manager">
      <div className="sidebar-container">
        <Sidebar user={{ name: "Sunny Sagar" }} onLogout={handleLogout} />
      </div>

     <div className="dashboard-container">
      { children }
     </div>

      <div className="chatbot-icon">
        <img src={chatbotIcon} alt="chatbot" />
      </div>
    </div>
  );
};

export default DashboardManager;
