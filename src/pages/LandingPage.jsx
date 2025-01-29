import React from "react";
import '../Style.css';

import Navbar from "../components/Navbar";
import AiBotAnimation from "../components/AiBotAnimation";
import AnimatedButton from "../components/SetUpButton";

import setupVid from "../assets/setup.mp4";

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
              <div className="features">
                <div className="feature">
                 
                </div>
                <div className="feature setup-feature">
                <video autoPlay loop muted className="ai-bot-video">
                    <source src={setupVid} type="video/mp4" />
                </video>
                </div>
                <div className="feature">
                  
                </div>
              </div>
    
              {/* AI Chat Conversation Image */}
              <div className="chat-conversation">
               
              </div>
    
              {/* Set Up Button */}
              <AnimatedButton text = {"Setup Your Button"} />
            </div>
          </div>
        </div>
      );
};

export default LandingPage;
