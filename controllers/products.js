const Product = require("../models/product");

const getAllProducts = async (request, response) => {
  const products = await Product.find({});
  response.json(products);
};

const getProductById = async (request, response) => {
  const { id } = request.params;
  try {
    const product = await Product.findById(id);
    response.json(product);
  } catch (error) {
    console.log(error.message);
  }
};

const getBestsellers = async (request, response) => {
  const products = await Product.find({});
  try {
    response.json(products.slice(2, 6));
  } catch (error) {
    console.log(error.message);
  }
};
const getCategories = async (request, response) => {
  const products = await Product.find({});
  const categories = new Set(products.flatMap((product) => product.category));
  console.log(categories);
  response.json([...categories]);
};

module.exports = { getAllProducts, getProductById, getBestsellers, getCategories };
