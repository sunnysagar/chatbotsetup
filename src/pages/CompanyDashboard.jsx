import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import "../Style.css"; // Add your CSS here for styling
import { FaArrowAltCircleRight} from "react-icons/fa";

const CompanyDashboard = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);
  const [selectedCompanyData, setSelectedCompanyData] = useState(null);
  const [page, setPages] = useState([]);
  const [metaDescription1, setMetaDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showContent, setShowContent] = useState(false);

  const location = useLocation();
  const { companyName, websiteUrl, description, metaDescription, pages } = location.state;

  const navigate = useNavigate();

  const [selectedcompany, setSelectedCompany] = useState(null);

  const handleNav = () => { 
    navigate("/setup-chatbot-intregation");
  };


  const backendUrl = import.meta.env.VITE_API_URL || "http://localhost:3001"; // Default to localhost if not in production

  // Fetch all companies from the backend
  useEffect(() => {
    const fetchCompanies = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${backendUrl}/api/companies`);
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
    setShowContent(true); // Show the content area after selection

    try {
      const response = await axios.get(`${backendUrl}/api/companies/${companyId}`);
      setSelectedCompany(response.data || {});
      setSelectedCompanyData(response.data.company || {});
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
  className="company-dashboard-container"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  {error && <p className="error-message">{error}</p>}
  {loading && <p className="loading-message">Loading...</p>}

  <motion.div
    className="current-company"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
  
    <h2>Current Company:</h2>

    {/* Flex container for two columns */}
    <div className="company-info-row">
      <p><strong>Name:</strong> {companyName}</p>
      <p><strong>Website:</strong> <a href={websiteUrl} target="_blank" rel="noopener noreferrer">{websiteUrl}</a></p>
    </div>
    <p><strong>Description:</strong> {description}</p>
  </motion.div>

 
  <div className="dropdown-container">
    <h3>Select a Company</h3>
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

  {showContent && selectedCompanyData && (
    <motion.div
      className="company-info"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h3>Company Details:</h3>

      {/* Flex container for two columns */}
      <div className="company-info-row">
        <p><strong>Name:</strong> {selectedcompany.name}</p>
        <p><strong>Website:</strong> <a href={selectedcompany.websiteUrl} target="_blank" rel="noopener noreferrer">{selectedcompany.websiteUrl}</a></p>
      </div>
      <p><strong>Description:</strong> {selectedcompany.description}</p>

      <h3>📝 Meta Description</h3>
      <p>{metaDescription1}</p>

      <h3>📄 Pages</h3>
      <ul>
        {page.length > 0 ? (
          page.map((page) => (
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
    <div className="action-buttons">
        <motion.button
          className="test-chatbot-btnn"
          whileHover={{ scale: 1.1 }}
          onClick={handleNav}
        >
         <FaArrowAltCircleRight  /> <br/> Test <br/> & <br/> Setup ChatBot
        </motion.button>
      </div>
</motion.div>

  );
};

export default CompanyDashboard;
