const router = require("express").Router();
const bcrypt = require("bcryptjs");
const db = require("../data/db");

router.post("/register", async (req, res, next) => {
  try {
    let user = req.body;

    if (!user.username || !user.password) {
      res.status(400).json({ error: "Username and password are required" });
    } else if (await db.getUserByName(user.username)) {
      res.status(400).json({ error: "Username must be unique" });
    } else {
      user.password = await bcrypt.hash(user.password, 12);
      const returnedUser = await db.addUser(user.username, user.password);
      res.status(201).json(returnedUser);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
