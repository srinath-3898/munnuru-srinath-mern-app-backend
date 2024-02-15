const { getUsers, createUsers, searchUsers } = require("../controllers/user");

const router = require("express").Router();

router.get("/create", createUsers);
router.get("", getUsers);
router.post("", searchUsers);

module.exports = router;
