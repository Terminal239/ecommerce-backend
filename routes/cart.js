const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart");
const auth = require("../middleware/auth");

router.get("/cart", auth, cartController.getCart);
router.post("/cart", auth, cartController.addToCart);
router.post("/cart/increment", auth, cartController.incrementCount);
router.post("/cart/decrement", auth, cartController.decrementCount);
router.delete("/cart/:id", auth, cartController.deleteItem);

module.exports = router;
