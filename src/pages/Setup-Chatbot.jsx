import React, { useState } from "react";
import { motion } from "framer-motion";
import "../Style.css"; // Make sure to style it!

const SetupChatbot = () => {
  const [companyName, setCompanyName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [description, setDescription] = useState("");
  const [webPages, setWebPages] = useState([]);
  const [step, setStep] = useState(1); // Track progress

  // 📌 Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting:", { companyName, websiteUrl, description });

    // Simulating backend response for web pages
    setTimeout(() => {
      setWebPages(["/about", "/services", "/contact"]);
      setStep(2); // Move to next step
    }, 2000);
  };

  return (
    <div className="setup-container">
      {/* ✅ Progress Bar */}
      <div className="progress-bar">
        <div className={`progress ${step >= 1 ? "active" : ""}`}></div>
        <div className={`progress ${step >= 2 ? "active" : ""}`}></div>
      </div>

      {step === 1 && (
        <motion.div 
          className="form-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>🚀 Setup Your Chatbot</h2>
          <form onSubmit={handleSubmit}>
            <label>Company Name</label>
            <input 
              type="text" 
              value={companyName} 
              onChange={(e) => setCompanyName(e.target.value)} 
              required 
            />

            <label>Website URL</label>
            <input 
              type="url" 
              value={websiteUrl} 
              onChange={(e) => setWebsiteUrl(e.target.value)} 
              required 
            />

            <label>Company Description</label>
            <textarea 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              required
            ></textarea>

            <motion.button 
              className="submit-btn"
              whileHover={{ scale: 1.1 }}
              type="submit"
            >
              Submit & Fetch Pages
            </motion.button>
          </form>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div 
          className="webpages-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>🔍 Web Pages Detected</h2>
          <ul>
            {webPages.map((page, index) => (
              <li key={index}>{page}</li>
            ))}
          </ul>
          <motion.button 
            className="final-btn"
            whileHover={{ scale: 1.1 }}
            onClick={() => console.log("Proceed to chatbot customization")}
          >
            Proceed to Customization
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default SetupChatbot;
