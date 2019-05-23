const routes = require("express").Router();

const SessionController = require("./app/controllers/SessionController");
const authMiddleawer = require("./app/midlewares/auth");

routes.post("/sessions", SessionController.store);
routes.use(authMiddleawer);
routes.get("/dashboard", (req, res) => {
  return res.status(200).send();
});
module.exports = routes;
