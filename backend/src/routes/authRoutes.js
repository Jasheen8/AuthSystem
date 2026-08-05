const express = require("express");

const router = express.Router();

const rateLimit = require("express-rate-limit");

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,

  max: 5,

  message: {
    success: false,
    message: "Too many login attempts",
  },
});

const {
  register,
  login,
  getProfile,
  refreshToken,
  logout,
  updateProfile,
  changePassword,
  forgotPassword,
  resetPassword,
} = require("../controllers/authController");

const { protect } = require("../middleware/authMiddleware");

const validate = require("../middleware/validateMiddleware");

const { registerValidation } = require("../middleware/authValidation");

router.post("/register", registerValidation, validate, register);

router.post("/login", loginLimiter, login);

router.get("/me", protect, getProfile);

router.post("/refresh", refreshToken);

router.put("/profile", protect, updateProfile);

router.post("/logout", logout);

router.put("/change-password", protect, changePassword);

router.post("/forgot-password", forgotPassword);

router.put("/reset-password/:token", resetPassword);

module.exports = router;
