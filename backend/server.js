const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const categoryRoutes = require("./routes/categoryRoutes");
const cartRoutes = require("./routes/cartRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/categories", categoryRoutes);
app.use("/api/cart", cartRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("ShopEase Backend is Running!");
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});