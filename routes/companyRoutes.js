const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const Company = require("../models/company");

const router = express.Router();

// Function to generate dummy data (used if no scraping)
const generateDummyData = (companyName, websiteUrl, description) => {
  // Generate a meta description based on company name and description
  const metaDescription = `${companyName} provides innovative solutions in the field of ${description.toLowerCase()}.`;

  // Dummy pages
  const pages = [
    {
      pageName: "/about",
      status: "scraped",
      dataChunks: [`About ${companyName}: ${description}`],
    },
    {
      pageName: "/solutions",
      status: "scraped",
      dataChunks: [`Solutions offered by ${companyName}: Tailored business strategies.`],
    },
    {
      pageName: "/contact",
      status: "scraped",
      dataChunks: [`For inquiries, reach out to us at contact@${websiteUrl}`],
    },
  ];

  return { metaDescription, pages };
};

// Function to scrape website
const scrapeWebsite = async (url) => {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const metaDescription = $("meta[name='description']").attr("content") || "No meta description found";

    let pages = [];
    $("a").each((index, element) => {
      const href = $(element).attr("href");
      if (href && href.startsWith("http")) {
        pages.push({ pageName: href, status: "pending", dataChunks: [] });
      }
    });

    return { metaDescription, pages };
  } catch (error) {
    console.error("Error scraping website:", error);
  }
};

// Scrape website or generate dummy data and save to DB
router.post("/scrape", async (req, res) => {
  const { websiteUrl, companyName, description } = req.body;

  let metaDescription = "";
  let pages = [];

  try {
    if (websiteUrl) {
      // If the URL is provided, try to scrape it
      const scrapeData = await scrapeWebsite(websiteUrl);

      if (scrapeData) {
        metaDescription = scrapeData.metaDescription || ""; // Default to empty string if not found
        pages = scrapeData.pages || []; // Default to empty array if not found
      } else {
        throw new Error("No data returned from scraping.");
      }
    } else {
      // If no URL is provided, generate dummy data
      const dummyData = generateDummyData(companyName, websiteUrl, description);
      metaDescription = dummyData.metaDescription;
      pages = dummyData.pages;
    }

    // Save company to MongoDB
    const newCompany = new Company({
      name: companyName,
      websiteUrl,
      description,
      metaDescription,
      pages,
    });

    await newCompany.save();

    res.status(200).json({
      name: companyName,
      websiteUrl: websiteUrl,
      description: description,
      message: "Company data processed successfully",
      metaDescription,
      pages,
    });
  } catch (error) {
    console.error("Error scraping website:", error);
    res.status(500).json({
      message: "Error processing company data.",
      error: error.message,
    });
  }
});


// Get all companies
router.get("/companies", async (req, res) => {
  const companies = await Company.find();
  res.status(200).json(companies);
});

// Get full details for a specific company
router.get("/companies/:companyId", async (req, res) => {
  const company = await Company.findById(req.params.companyId);
  if (!company) {
    return res.status(404).json({ error: "Company not found" });
  }
  res.status(200).json({
    name: company.name,
    websiteUrl: company.websiteUrl,
    description: company.description,
    metaDescription: company.metaDescription,
    pages: company.pages,
  });
});

// Get pages for a specific company
router.get("/companies/:companyId/pages", async (req, res) => {
  const company = await Company.findById(req.params.companyId);
  res.status(200).json(company.pages);
});

// Get data chunks for a specific page
router.get("/companies/:companyId/pages/:pageName", async (req, res) => {
  const company = await Company.findById(req.params.companyId);
  const page = company.pages.find((p) => p.pageName === req.params.pageName);
  if (page) {
    page.status = "scraped";
    page.dataChunks.push(`Data chunk for ${req.params.pageName}`);
    await company.save();
    res.status(200).json(page);
  } else {
    res.status(404).json({ error: "Page not found" });
  }
});

module.exports = router;
