const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../data/db");

const generateToken = user => {
  const payload = {
    username: user.username,
    sub: user.id
  };

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, process.env.JWT_SECRET, options);
};

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await db.getUserByName(username);
    if (!user || !bcrypt.compare(password, user.password)) {
      res.status(401).json({ error: "Wrong username or password" });
    } else {
      const token = generateToken(user);
      res.status(200).json({ message: "Logged in", token });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
