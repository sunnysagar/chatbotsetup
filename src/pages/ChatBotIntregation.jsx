import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import '../Style.css';

const ChatbotIntegration = () => {
  const [showTestResult, setShowTestResult] = useState(false);
  const [testSuccessful, setTestSuccessful] = useState(null);
  const [showIntegrationInstructions, setShowIntegrationInstructions] = useState(false);

  const navigate = useNavigate(); // For navigation

  const handleTestChatbot = () => {
    // Simulate chatbot test
    setShowTestResult(true);
    setTimeout(() => {
      // Assuming test is successful after 2 seconds for demo purposes
      setTestSuccessful(true);
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

  const retryTestChatbot = () => {
    setShowTestResult(false);
    setTestSuccessful(null);
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
    navigate("/admin-panel");
  };

 

  return (
    <div className="chatbot-integration-container">
      {/* Test Chatbot Section */}
      <motion.div
        className="test-chatbot-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="topbar">
          <h3>Chatbot not working as intended? Share feedback</h3>
        </div>

        <div className="chatbot-buttons">
          {/* Test Chatbot Button */}
          <motion.button
            className="test-chatbot-btn"
            whileHover={{ scale: 1.1 }}
            onClick={handleTestChatbot}
          >
            Test Chatbot
          </motion.button>
        </div>

        {/* Test Result UI */}
        {showTestResult && testSuccessful && (
          <motion.div
            className="success-ui"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Success! The Chatbot is working as expected 🎉</h3>
            <div className="confetti">
              {/* Confetti or Success animation */}
            </div>
            <motion.button
              className="start-chatbot-btn"
              whileHover={{ scale: 1.1 }}
              onClick={startChatWithBot}
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
            <h3>Chatbot Test Failed</h3>
            <p>Please check your chatbot integration and try again.</p>
            <motion.button
              className="retry-test-btn"
              whileHover={{ scale: 1.1 }}
              onClick={retryTestChatbot}
            >
              Retry Test Chatbot
            </motion.button>
          </motion.div>
        )}
      </motion.div>

      {/* Test Integration Section */}
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
              onClick={startChatWithBot}
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
  );
};

export default ChatbotIntegration;
