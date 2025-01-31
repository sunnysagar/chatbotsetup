import React from "react";
import { FaTachometerAlt, FaRobot, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import "../Style.css";

const Sidebar = ({ user, onLogout }) => {
    // const navigate = useNavigate();
    const location = useLocation();

    return (
      <div className="sidebar">
        <div className="menu">
          <SidebarItem
            icon={<FaTachometerAlt />}
            text="Dashboard"
            path="/dashboard"
            isActive={location.pathname === "/dashboard"}
          />
          <SidebarItem
            icon={<FaRobot />}
            text="Setup Chatbot"
            path="/setup-chatbot"
            isActive={location.pathname === "/setup-chatbot"}
          />
          <SidebarItem
            icon={<FaUser />}
            text="Profile"
            path="/profile"
            isActive={location.pathname === "/profile"}
          />
          <SidebarItem
            icon={<FaCog />}
            text="Settings"
            path="/settings"
            isActive={location.pathname === "/settings"}
          />

          <div className="separator"></div>

          {/* User Info & Logout */}
          <SidebarItem
            icon={<FaUser />}
            text={user?.name || "User"}
            path="/profile"
            isActive={location.pathname === "/profile"}
          />
          <SidebarItem icon={<FaSignOutAlt />} text="Logout" onClick={onLogout} />
        </div>
      </div>
    );
};

const SidebarItem = ({ icon, text, path, isActive, onClick }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (path) navigate(path);
        if (onClick) onClick();
    };

    return (
      <motion.div
        className={`sidebar-item ${isActive ? "active" : ""}`}
        whileHover={{ scale: 1.05 }}
        onClick={handleClick}
      >
        <div className="icon">{icon}</div>
        <motion.span
          className="text"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          whileHover={{ opacity: 1, x: 10 }}
        >
          {text}
        </motion.span>
      </motion.div>
    );
};

export default Sidebar;
