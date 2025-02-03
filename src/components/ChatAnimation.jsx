import React, { useState, useEffect } from "react";
import "../Style.css"; // Add your custom CSS for styles

const ChatComponent = ({ triggerChat, customMessages = [] }) => {
  const [isChatVisible, setChatVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userTyping, setUserTyping] = useState(false); // User typing indicator
  const [botTyping, setBotTyping] = useState(false); // Bot typing indicator
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    if (triggerChat && customMessages.length > 0) {
      setChatVisible(true);
      setMessages([{ sender: "bot", message: customMessages[0] }]);
      // Simulate user typing indicator
      setUserTyping(true);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "user", message: customMessages[1] },
        ]);
        setUserTyping(false);

        // Simulate bot typing indicator
        setBotTyping(true);
        setTimeout(() => {
          setBotTyping(false);
          setMessages((prev) => [
            ...prev,
            { sender: "bot", message: customMessages[2] },
          ]);
          // Show thank you message after a further delay
            setTimeout(() => {
              setChatVisible(false);
            }, 2000); // Thank you message stays for 2 seconds
           // Bot's reply stays for 3 seconds
        }, 2000); // Typing delay for bot (3 seconds)
      }, 3000); // User's message delay
    }
  }, [triggerChat, customMessages]);

  return (
    <div className={`chat-container ${isChatVisible ? "show" : ""}`}>
      <div className="chat-window">
        <div className="chat-header">Live Chat</div>
        <div className="chat-content">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={msg.sender === "user" ? "user-message" : "bot-message"}
            >
              {msg.message}
            </div>
          ))}

          {userTyping && (
            <div className="typing-indicator you">You are typing...</div>
          )}

          {botTyping && (
            <div className="typing-indicator bot">Bot is typing...</div>
          )}

          {showThankYou && (
            <div className="thank-you-message">
              <p>Thank you for joining!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
