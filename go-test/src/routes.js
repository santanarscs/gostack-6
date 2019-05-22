const routes = require("express").Router();

const { User } = require("./app/models");

routes.get("/", async (req, res) => {
  const user = await User.create({
    name: "Raphael",
    email: "raphaelstn@gmail.com",
    password_hash: "123123"
  });
  return res.json({ user });
});

module.exports = routes;
