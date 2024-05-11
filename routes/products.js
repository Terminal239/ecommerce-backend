const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products");

router.get("/products", productsController.getAllProducts);
router.get("/products/:id", productsController.getProductById);
router.get("/products/bestsellers", productsController.getBestsellers);
router.get("/categories", productsController.getCategories);

module.exports = router;
