const jwt = require("jsonwebtoken");
const Item = require("../models/item");
const Product = require("../models/product");
const User = require("../models/user");

const getCart = async (request, response) => {
  const userId = request.user;
  if (!userId) {
    return response.status(401).json({ error: "Unauthorized access" });
  }

  try {
    const { cart } = await User.findById(userId).populate({
      path: "cart",
      populate: {
        path: "item",
        model: "Product",
      },
    });

    response.status(201).json(cart);
  } catch (error) {
    console.log(error.message);
  }
};

const addToCart = async (request, response) => {
  const userId = request.user;
  if (!userId) {
    return response.status(401).json({ error: "Unauthorized access" });
  }

  try {
    const { id } = request.body;
    const product = await Product.findById(id);
    const user = await User.findById(userId);

    const cart = new Item({ item: product._id });
    const savedItem = await cart.save();

    user.cart = user.cart.concat(savedItem._id);
    await user.save();

    response.status(201).json(await savedItem.populate("item"));
  } catch (error) {
    console.log(error.message);
  }
};

const incrementCount = async (request, response) => {
  const userId = request.user;
  if (!userId) {
    return response.status(401).json({ error: "Unauthorized access" });
  }

  const { id } = request.body;
  try {
    const item = await Item.findById(id);
    item.count++;

    const updated = await Item.findByIdAndUpdate(item._id, item, { new: true });
    response.status(201).json(await updated.populate("item"));
  } catch (error) {
    console.log(error.message);
  }
};

const decrementCount = async (request, response) => {
  const userId = request.user;
  if (!userId) {
    return response.status(401).json({ error: "Unauthorized access" });
  }

  const { id } = request.body;
  const item = await Item.findById(id);

  if (item.count != 1) {
    item.count--;
    const updated = await Item.findByIdAndUpdate(item._id, item, { new: true });
    return response.status(201).json(await updated.populate("item"));
  }

  response.status(204).json({ message: "no change" });
};

const deleteItem = async (request, response) => {
  const userId = request.user;
  if (!userId) {
    return response.status(401).json({ error: "Unauthorized access" });
  }

  const { id } = request.params;
  await Item.findByIdAndDelete(id);

  response.status(204).end();
};

module.exports = { getCart, addToCart, incrementCount, decrementCount, deleteItem };
