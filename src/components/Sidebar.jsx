import React, { useState } from "react";
import { FaTachometerAlt, FaRobot, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";
import "../Style.css";

const Sidebar = ({ user, onLogout }) => {
    const navigate = useNavigate();

    const handleClick =() => {
        navigate("/setup-chatbot");
    }
    return (
      <div className="sidebar">
        {/* Sidebar Items */}
        <div className="menu">
          <SidebarItem icon={<FaTachometerAlt />} text="Dashboard" />
          <SidebarItem onClick = {handleClick} icon={<FaRobot />} text="Setup Chatbot"/>
          <SidebarItem icon={<FaUser />} text="Profile" />
          <SidebarItem icon={<FaCog />} text="Settings" />
  
          <div className="separator"></div>
  
          {/* User Info & Logout */}
          <SidebarItem icon={<FaUser />} text={user?.name || "User"} />
          <SidebarItem icon={<FaSignOutAlt />} text="Logout" onClick={onLogout} />
        </div>
      </div>
    );
  };
  
  const SidebarItem = ({ icon, text, onClick }) => {
    return (
      <motion.div
        className="sidebar-item"
        whileHover={{ scale: 1.1 }}
        onClick={onClick}
      >
        <div className="icon">{icon}</div>
        <motion.span
          className="text"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 0 }}
          whileHover={{ opacity: 1, x: 10 }}
        >
          {text}
        </motion.span>
      </motion.div>
    );
  };

export default Sidebar;
