const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

const {
  getDashboard,
  getUsers,
  createUser,
} = require("../controllers/userController");

router.get("/dashboard", protect, authorize("user", "admin"), getDashboard);

module.exports = router;
