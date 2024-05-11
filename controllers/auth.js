const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (request, response) => {
  const { username, email, password } = request.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    email,
    passwordHash,
  });

  await user.save();
  const userForToken = {
    email: user.email,
    id: user._id,
    username: user.username,
  };

  const token = jwt.sign(userForToken, process.env.SECRET);
  response.status(200).send({ token, email: user.email, username: user.username });
};

const login = async (request, response) => {
  const { email, password } = request.body;

  const user = await User.findOne({ email }).populate({
    path: "cart",
    populate: {
      path: "item",
      model: "Product",
    },
  });

  const passwordCorrect = user === null ? false : await bcrypt.compare(password, user.passwordHash);
  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: "invalid email or password",
    });
  }

  const userForToken = {
    email: user.email,
    id: user._id,
    username: user.username,
  };

  const token = jwt.sign(userForToken, process.env.SECRET);
  response.status(200).send({ token, email: user.email, username: user.username });
};

module.exports = { login, signup };
