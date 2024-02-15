const express = require("express");
const sequelize = require("./configs/dbConfig");
const User = require("./models/user");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

//middleware for fetching the user
app.use("/users", require("./routes/user"));

User;

//syncing the database and running the server
sequelize.sync().then(() => {
  console.log("Database synced ");
  app.listen(8080, () => {
    console.log("server started");
  });
});
