const Sequelize = require("sequelize");

const sequelize = new Sequelize("mern_neo_soft", "postgres", "Munnuru@1998", {
  dialect: "postgres",
  host: "localhost",
  logging: false,
  pool: {
    max: 100,
    min: 0,
    idle: 10000,
  },
});

module.exports = sequelize;
