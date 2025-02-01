import React, { useState } from "react";
import { motion } from "framer-motion";
import echobot from "../assets/botecho.png"
import "../Style.css";
import ChatComponent from "../components/ChatAnimation";
import { useNavigate } from "react-router-dom";

const EchoAssistant = () => {
  const [showTestResult, setShowTestResult] = useState(false);
  const [testSuccessful, setTestSuccessful] = useState(null);
  const [showIntegrationInstructions, setShowIntegrationInstructions] = useState(false);

  const navigate = useNavigate();

  const handleTestChatbot = () => {
    setShowTestResult(true);
    setTimeout(() => {
      setTestSuccessful(true); // Simulating success after 2 sec
    }, 2000);
  };

  const handleTestIntegration = () => {
    // Simulate integration test
    setShowTestResult(true);
    setTimeout(() => {
      // Assuming integration is successful after 2 seconds for demo purposes
      setTestSuccessful(true);
    }, 2000);
  };

  const retryTestIntegration = () => {
    setShowTestResult(false);
    setTestSuccessful(null);
  };

  const handleIntegrateChatbot = () => {
    setShowIntegrationInstructions(true);
  };

  const sendMailToDeveloper = () => {
    // Placeholder for sending mail to developer
    alert("Mailing integration instructions to developer...");
  };

  const startChatWithBot = () => {
    // Placeholder for starting chat with chatbot
    alert("Starting chat with chatbot...");
  };

  const navigateToAdminPanel = () => {
    // Navigate to admin panel
    navigate("/admin-dashboard");
  };

   const [triggerChat, setTriggerChat] = useState(false);
  
    const handleChatTrigger = () => {
      setTriggerChat(true);
      setTimeout(() => {
        setTriggerChat(false);
      }, 6000);  // Reset the chat after the whole process (3s chat + 2s thank you)
    };


  return (
    <div className="echo-container">
      <div className="echo-card">
        <img src={echobot} alt="Echo AI Assistant" className="echo-image" />
        <h2>Meet Echo!</h2>
        <h3>
          Your <span className="highlight">AI Assistant</span>
        </h3>
        <p>All your questions will be answered by an AI assistant. Ask here, please!</p>

        {/* Test Chatbot Button at Bottom Center */}
        <motion.button
          className="test-chatbot-btn"
          whileHover={{ scale: 1.1 }}
          onClick={handleTestChatbot}
        >
          Test Chatbot
        </motion.button>

        {/* Test Result UI */}
        {showTestResult && (
          <motion.div
            className={`test-result ${testSuccessful ? "success" : "failure"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {testSuccessful ? (
              <h3>🎉 Success! The Chatbot is working fine.</h3>
            ) : (
              <h3>❌ Chatbot Test Failed</h3>
            )}
          </motion.div>  
        )}

           <motion.div
                  className="test-integration-container"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="topbar">
                    <h3>Chatbot not working as intended? Share feedback</h3>
                  </div>
          
                  <div className="chatbot-buttons">
                    {/* Integrate Chatbot Button */}
                    <motion.button
                      className="integrate-chatbot-btn"
                      whileHover={{ scale: 1.1 }}
                      onClick={handleIntegrateChatbot}
                    >
                      Integrate on Your Website
                    </motion.button>
                  </div>
          
                  {/* Integration Instructions */}
                  {showIntegrationInstructions && (
                    <motion.div
                      className="integration-instructions"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3>Integrate Chatbot on Your Website</h3>
                      <p>Copy and paste the following code into the <code>&lt;head&gt;</code> section of your website:</p>
                      <pre>{`<script src="dummy-chatbot.js"></script>`}</pre>
          
                      <div className="email-instructions">
                        <p>If you need help, we can send the instructions to your developer via email.</p>
                        <motion.button
                          className="mail-instructions-btn"
                          whileHover={{ scale: 1.1 }}
                          onClick={sendMailToDeveloper}
                        >
                          Mail Instructions to Developer
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
          
                  {/* Test Integration Result UI */}
                  {showTestResult && testSuccessful && (
                    <motion.div
                      className="success-ui"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3>Success! The Chatbot Integration Was Successful 🎉</h3>
                      <div className="confetti">
                        {/* Confetti or Success animation */}
                      </div>
                      <motion.button
                        className="admin-panel-btn"
                        whileHover={{ scale: 1.1 }}
                        onClick={navigateToAdminPanel}
                      >
                        Explore Admin Panel
                      </motion.button>
                      <motion.button
                        className="start-chatbot-btn"
                        whileHover={{ scale: 1.1 }}
                        onClick={handleChatTrigger}
                      >
                        Start Talking to Your Chatbot
                      </motion.button>
                    </motion.div>
                  )}
          
                  {showTestResult && !testSuccessful && (
                    <motion.div
                      className="failure-ui"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3>Integration Not Detected</h3>
                      <p>The chatbot integration couldn't be detected. Please try again.</p>
                      <motion.button
                        className="retry-integration-btn"
                        whileHover={{ scale: 1.1 }}
                        onClick={retryTestIntegration}
                      >
                        Retry Test Integration
                      </motion.button>
                    </motion.div>
                  )}
                </motion.div>
      </div>

      {triggerChat && <ChatComponent triggerChat={triggerChat} />}
    </div>
  );
};

export default EchoAssistant;
