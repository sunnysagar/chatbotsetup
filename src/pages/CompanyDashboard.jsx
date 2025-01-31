import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "../Style.css"; // Add your CSS here for styling

const CompanyDashboard = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);
  const [pages, setPages] = useState([]);
  const [metaDescription, setMetaDescription] = useState("");
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

  // Fetch pages for the selected company
  const handleCompanySelection = async (companyId) => {
    if (!companyId) return;

    setSelectedCompanyId(companyId);
    setPages([]);
    setMetaDescription("");
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(`http://localhost:3001/api/companies/${companyId}/pages`);
      setPages(response.data.pages || []);
      setMetaDescription(response.data.metaDescription || "No description available.");
    } catch (error) {
      setError("Error fetching company pages.");
      console.error("Error fetching company pages:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="dashboard-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {error && <p className="error-message">{error}</p>}
      {loading && <p className="loading-message">Loading...</p>}

      <h2>🔍 Select a Company</h2>

      {/* Scrollable Dropdown for Company Selection */}
      <div className="dropdown-container">
        <select
          onChange={(e) => handleCompanySelection(e.target.value)}
          value={selectedCompanyId || ""}
          className="company-dropdown"
        >
          <option value="">Select a company</option>
          {companies.map((company) => (
            <option key={company._id} value={company._id}>
              {company.name}
            </option>
          ))}
        </select>
      </div>

      {selectedCompanyId && (
        <motion.div
          className="company-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3>📝 Meta Description</h3>
          <p>{metaDescription}</p>

          <h3>📄 Pages</h3>
          <ul>
            {pages.length > 0 ? (
              pages.map((page) => (
                <li key={page.pageName}>
                  <strong>{page.pageName}</strong> - {page.status}
                  <ul>
                    {page.dataChunks &&
                      page.dataChunks.map((chunk, idx) => <li key={idx}>{chunk}</li>)}
                  </ul>
                </li>
              ))
            ) : (
              <p>No pages found for this company.</p>
            )}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};

export default CompanyDashboard;
