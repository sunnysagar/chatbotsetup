import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "../Style.css"; // Add your CSS here for styling

const SetupChatbot = () => {
  const [companyName, setCompanyName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [description, setDescription] = useState("");
  const [companies, setCompanies] = useState([]);
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);
  const [pages, setPages] = useState([]);
  const [metaDescription, setMetaDescription] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch all companies from the backend
  useEffect(() => {
    const fetchCompanies = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3001/api/companies");
        setCompanies(response.data || []);
      } catch (error) {
        setError("Error fetching companies. Please try again.");
        console.error("Error fetching companies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  // Handle company creation and scraping
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

      setMetaDescription(response.data?.metaDescription || "No description available.");
      setPages(response.data?.pages || []);
      setStep(2); // Move to next step after scraping
    } catch (error) {
      setError("Error submitting company. Please check the details.");
      console.error("Error submitting company:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch pages for the selected company
  const handleCompanySelection = async (companyId) => {
    if (!companyId) return;

    setSelectedCompanyId(companyId);
    setMetaDescription("");
    setPages([]);
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(`http://localhost:3001/api/companies/${companyId}/pages`);
      console.log("Response data:", response.data);  // Log the API response to check the structure
      setPages(response.data || []);
      setMetaDescription(response.data?.metaDescription || "No description available.");
      setStep(2);
    } catch (error) {
      setError("Error fetching company pages.");
      console.error("Error fetching company pages:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="setup-container">
      {/* Progress Bar */}
      <div className="progress-bar">
        <div className={`progress ${step >= 1 ? "active" : ""}`}></div>
        <div className={`progress ${step >= 2 ? "active" : ""}`}></div>
      </div>

      {error && <p className="error-message">{error}</p>}
      {loading && <p className="loading-message">Loading...</p>}

      {/* Step 1: Add New Company */}
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
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit & Fetch Pages"}
            </motion.button>
          </form>
        </motion.div>
      )}

      {/* Step 2: View Companies and Their Pages */}
      {step === 2 && (
        <motion.div
          className="webpages-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>🔍 Select a Company</h2>

          {/* Dropdown to select a company */}
          <select
            onChange={(e) => handleCompanySelection(e.target.value)}
            value={selectedCompanyId || ""}
          >
            <option value="">Select a company</option>
            {companies.map((company) => (
              <option key={company._id} value={company._id}>
                {company.name}
              </option>
            ))}
          </select>

          {/* Display company metadata */}
          {selectedCompanyId && (
            <div className="company-info">
              <h3>📝 Meta Description</h3>
              <p>{metaDescription}</p>

              <h3>📄 Pages</h3>
              <ul>
                {pages.length > 0 ? (
                  pages.map((page) => (
                    <li key={page.pageName}>
                      <strong>{page.pageName}</strong> - {page.status}

                      <ul>
                        {page.dataChunks && page.dataChunks.length > 0 && (
                          page.dataChunks.map((chunk, idx) => (
                            <li key={idx}>{chunk}</li>
                          ))
                        )}
                      </ul>
                    </li>
                  ))
                ) : (
                  <p>No pages found for this company.</p>
                )}
              </ul>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default SetupChatbot;
