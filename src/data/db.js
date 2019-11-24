const db = require("./dbConfig");

const getUserById = id => {
  return db("users")
    .where({ id })
    .first();
};

const getUserByName = username => {
  return db("users")
    .where({ username })
    .first();
};

const addUser = async (username, password) => {
  const [id] = await db("users").insert({ username, password });
  return getUserById(id);
};

module.exports = {
  getUserById,
  getUserByName,
  addUser
};
