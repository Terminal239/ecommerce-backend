const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

require("./connect");

const productsRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");
const authRoutes = require("./routes/auth");

app.use("/api", productsRoutes);
app.use("/api", cartRoutes);
app.use("/api", authRoutes);

module.exports = app;
