const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
app.use(express.json());
app.use(cors());
require("./connect");

const productsRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");
const authRoutes = require("./routes/auth");

app.use(express.static(path.join(__dirname, "dist")));

app.use((req, res, next) => {
  if (req.url.startsWith("/api")) {
    next();
  } else {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  }
});

app.use("/api", productsRoutes);
app.use("/api", cartRoutes);
app.use("/api", authRoutes);

module.exports = app;
