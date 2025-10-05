const express = require("express");
const router = express.Router();

// Example in-memory product list
const products = [
  { id: 1, name: "Apple", price: 1.2 },
  { id: 2, name: "Banana", price: 0.5 },
  { id: 3, name: "Orange", price: 0.8 },
];

// ✅ GET all products
router.get("/", (req, res) => {
  res.json(products);
});

// ✅ GET single product by ID
router.get("/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

// ✅ POST new product
router.post("/", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

module.exports = router;

