const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: String,
  websiteUrl: String,
  description: String,
  metaDescription: String,
  pages: [
    {
      pageName: String,
      status: { type: String, default: "pending" },
      dataChunks: [String],
    },
  ],
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
