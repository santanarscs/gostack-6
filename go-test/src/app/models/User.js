const brcypt = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
      password_hash: DataTypes.STRING
    },
    {
      hooks: {
        beforeSave: async user => {
          if (user.password) {
            user.password_hash = await brcypt.hash(user.password, 8);
          }
        }
      }
    }
  );
  User.prototype.checkPassword = function(password) {
    return brcypt.compare(password, this.password_hash);
  };
  return User;
};
