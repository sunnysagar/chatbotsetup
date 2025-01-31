import React from "react";
import Sidebar from "../components/Sidebar";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";


import AiBotAnimation from "../components/AiBotAnimation";
import { FaLongArrowAltRight } from "react-icons/fa";

import chatbotIcon from "../assets/chatbot.png";


import "../Style.css";

const DashboardManager = ({ children }) => {

  const navigate = useNavigate();

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
