const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables from .env

const companyRoutes = require("./routes/companyRoutes");
const Company = require("./models/company");

// Import dummy data from separate files (You can add your dummy companies here)
const company1 = require("./dummydata/company1");
const company2 = require("./dummydata/company2");
const company3 = require("./dummydata/company3");
const company4 = require("./dummydata/company4");
const company5 = require("./dummydata/company5");

const app = express();
const port = process.env.PORT || 3001;  // Use port from environment variable or default to 3001

// Use CORS to allow frontend access
app.use(cors({ origin: "https://ai-c-bot.netlify.app/" }));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Use routes
app.use("/api", companyRoutes);

// Initialize dummy companies
const initializeDummyCompanies = async () => {
  const companies = [company1, company2, company3, company4, company5];
  
  for (const companyData of companies) {
    const existingCompany = await Company.findOne({ name: companyData.name });
    if (!existingCompany) {
      const company = new Company(companyData);
      await company.save();
    }
  }
};

initializeDummyCompanies(); // Call the function to insert dummy companies into the database

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
