const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      success: true,
      user
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

exports.getUsers = async (req, res) => {
  const users = await User.find();

  res.json({
    success: true,
    users
  });
};

exports.getDashboard = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome User",
    user: req.user,
  });
};