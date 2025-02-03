import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { auth } from "../../firebase";
import { useLocation, useNavigate } from "react-router-dom";

import chatbotIcon from "../assets/chatbot.png";

import "../Style.css";
import ChatComponent from "../components/ChatAnimation";

const DashboardManager = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation(); // For getting current location
  const [triggerChat, setTriggerChat] = useState(false);
  const [customMessages, setCustomMessages] = useState([]) ;

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };

  
  const handleChatTrigger = (message) => {
    setCustomMessage(message);
  
    setTriggerChat(true);
    setTimeout(() => {
      setTriggerChat(false);
      // setCustomMessage(""); // Reset the message after chat ends
    }, 6000); // Reset the chat after the whole process (3s chat + 2s thank you)
  };

  const handleNav = () => {
    if (location.pathname === "/company-dashboard") {
      setCustomMessages([
        "Are you ready for chatbot intregration?",
        "sure.",
        "cool, let me ready for you..."
      ]);

      setTriggerChat(true);
      setTimeout(() => {
        navigate("/setup-chatbot-intregation");
      }, 7000)
     
    } else if(location.pathname === "/dashboard")
      {
        setCustomMessages([
          "Please Register your company first.",
          "Okay",
          "Fine, Let me open..."
        ]);
        setTriggerChat(true);
        setTimeout(() => {
          navigate("/company-registration");
        }, 7000)
      } else if(location.pathname === "/user-profile"){
        setCustomMessages([
          "Hi Sunny, How can I help you?",
          "Can you highlight your best feature?",
          "sure, I can work as you want."
        ])
        setTriggerChat(true);
      } else if(location.pathname === "/admin-dashboard"){
        setCustomMessages([
          "Hi, what can I do for you?",
          "Tell me, How it is going?",
          "Yeah, all good! ☺ "
        ])
        setTriggerChat(true);
      } else if(location.pathname === "/setup-chatbot-intregation"){
        setCustomMessages([
          "🎉🎯 BINGO! Your set up is done. 🎯🎉",
          "Thank you",
          "Pleasure is mine! 😃🚀 "
        ])
        setTriggerChat(true);
      }
    }
  

  return (
    <div className="dashboard-manager">
      <div className="sidebar-container">
        <Sidebar user={{ name: "Sunny Sagar" }} onLogout={handleLogout} />
      </div>

      <div className="dashboard-container">{children}</div>

      <div className="chatbot-icon" onClick={handleNav}>
        <img src={chatbotIcon} alt="chatbot" />
      </div>

      {/* Render ChatComponent based on triggerChat state */}
      {triggerChat && <ChatComponent triggerChat={triggerChat} customMessages={customMessages} />}
    </div>
  );
};

export default DashboardManager;
