import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "../Style.css"; // Add your CSS here for styling
import { useNavigate } from "react-router-dom";
import { nav } from "framer-motion/client";

const CompanyRegistration = ({ onSubmitSuccess }) => {
  const [companyName, setCompanyName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(true); // State for controlling overlay visibility

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await axios.post("http://localhost:3001/api/scrape", {
        companyName,
        websiteUrl,
        description,
      });
      onSubmitSuccess(response.data); // Pass data to parent component for next steps
      navigate("/company-dashboard"); // Navigate to the next step
    } catch (error) {
      setError("Error submitting company. Please check the details.");
      console.error("Error submitting company:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    navigate("/dashboard")
    setIsVisible(false); // Close the overlay
    
  };

  return (
    isVisible && (
      <motion.div
        className="overlay-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="overlay">
          <button className="close-company-btn" onClick={handleClose}>
            X
          </button>
          <h2>🚀 Setup Your Chatbot</h2>
          <form onSubmit={handleSubmit} className="company-form">
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
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit & Fetch Pages"}
            </motion.button>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>
      </motion.div>
    )
  );
};

export default CompanyRegistration;
