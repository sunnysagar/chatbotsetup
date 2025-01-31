import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { auth } from "../../firebase";
import { useLocation, useNavigate } from "react-router-dom";

import chatbotIcon from "../assets/chatbot.png";


import "../Style.css";
import ChatComponent from "../components/ChatAnimation";

const DashboardManager = ({ children}) => {

  const navigate = useNavigate();
  const location = useLocation(); // For getting current location

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };

  const [triggerChat, setTriggerChat] = useState(false);

  const handleChatTrigger = () => {
    setTriggerChat(true);
    setTimeout(() => {
      setTriggerChat(false);
    }, 6000);  // Reset the chat after the whole process (3s chat + 2s thank you)
  };

  const handleNav = () => { 
    if(location.pathname === "/company-dashboard"){
      navigate("/setup-chatbot-intregation");
    }else{
      if(location.pathname === "/dashboard"){
        alert("Please register your company first");
    }
    if(location.pathname === "/setup-chatbot-intregation"){
     handleChatTrigger();
    //  <ChatComponent triggerChat={triggerChat} />
    }


  };
};

  return (
    <div className="dashboard-manager">
      <div className="sidebar-container">
        <Sidebar user={{ name: "Sunny Sagar" }} onLogout={handleLogout} />
      </div>

     <div className="dashboard-container">
      { children }
     </div>

      <div className="chatbot-icon"
        onClick={handleNav}>
       
        <img src={chatbotIcon} alt="chatbot" />
      </div>

      {/* Render ChatComponent based on triggerChat state */}
      {triggerChat && <ChatComponent triggerChat={triggerChat} />}
    </div>
  );
};

export default DashboardManager;
