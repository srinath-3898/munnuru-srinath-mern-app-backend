const Sequelize = require("sequelize");

const sequelize = require("../configs/dbConfig");

class User extends Sequelize.Model {}

User.init(
  {
    userId: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: Sequelize.DataTypes.TEXT,
      allowNull: false,
    },
  },
  { sequelize, modelName: "user" }
);

module.exports = User;
