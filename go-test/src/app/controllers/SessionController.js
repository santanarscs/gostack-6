const { User } = require("../models");
const Mail = require("../services/MailService");
class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ message: "Password incorrect" });
    }

    await Mail.send({
      from: "Raphael Santana",
      to: `${user.name}`,
      subject: "Novo acesso",
      text: "Registro de novo acesso na conta"
    });

    return res.json({
      token: await user.generateToken()
    });
  }
}

module.exports = new SessionController();
