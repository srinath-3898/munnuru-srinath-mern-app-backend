const { default: axios } = require("axios");
const User = require("../models/user");
const Sequelize = require("sequelize");

const createUsers = async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const createdUsers = await User.bulkCreate(response.data);
    if (!createdUsers) {
      throw new Error("Something went wrong while creating users");
    }
    return res
      .status(200)
      .json({ success: true, data: createdUsers, message: null });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, data: null, message: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    let { page, size } = req.query;
    page = page ? parseInt(page, 10) : 1;
    size = size ? parseInt(size, 10) : 10;
    const offset = (page - 1) * size;
    const users = await User.findAll({
      limit: size,
      offset: offset,
    });
    return res.status(200).json({ success: true, data: users, message: null });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, data: null, message: error.message });
  }
};

const searchUsers = async (req, res) => {
  try {
    const { searchString } = req.body;
    if (!searchString) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "Search string is required.",
      });
    }
    const users = await User.findAll({
      where: {
        title: {
          [Sequelize.Op.like]: `%${searchString}%`,
        },
      },
    });
    if (!users.length) {
      return res
        .status(404)
        .json({ success: true, data: null, message: "No users found." });
    }
    return res.status(200).json({ success: true, data: users, message: null });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, data: null, message: error.message });
  }
};

module.exports = { createUsers, getUsers, searchUsers };
