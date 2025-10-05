const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const productRoutes = require("./routes/products");
const { logger } = require("./middleware/logger");
const { auth } = require("./middleware/auth");

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 1000;

// 🧩 Middleware
app.use(bodyParser.json()); // Parse JSON
app.use(logger); // Log all requests
app.use(auth); // Check API key

// 🏠 Root Route
app.get("/", (req, res) => {
  res.send("Hello World from Express.js 🚀");
});

// 🛒 Product Routes
app.use("/api/products", productRoutes);

// ⚡ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
