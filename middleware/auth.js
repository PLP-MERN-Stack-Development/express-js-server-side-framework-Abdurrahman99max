const dotenv = require("dotenv");
dotenv.config();

const auth = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey) {
    return res.status(401).json({ message: "Missing API key in request headers" });
  }

  if (apiKey !== process.env.API_KEY) {
    return res.status(403).json({ message: "Invalid API key" });
  }

  next();
};

module.exports = { auth };

