const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = getTokenFrom(req);

  try {
    if (!token) {
      return res.status(401).json({ error: "Unauthorized: Token missing" });
    }

    const decodedToken = jwt.verify(token, process.env.SECRET);
    req.user = decodedToken.id;

    next();
  } catch (error) {
    res.status(401).json({ error: "Unauthorized: Invalid token" });
  }
};

const getTokenFrom = (request) => {
  const authorization = request.get("authorization");

  if (authorization && authorization.startsWith("Bearer ")) {
    return authorization.replace("Bearer ", "");
  }
  return null;
};

module.exports = auth;
