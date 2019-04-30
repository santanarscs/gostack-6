const User = require("../models/User");

class userController {
  async store(req, res) {
    const { email } = req.body;

    if (await User.findOne({ email })) {
      return res.status(400).json({ error: "User already existis" });
    }
    const user = await User.create(req.body);
    return res.json(user);
  }
  async update(req, res) {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    return res.json(user)
  }
}

module.exports = new userController();
