const { body } = require("express-validator");

exports.registerValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required"),

  body("email")
    .isEmail()
    .withMessage("Invalid Email"),

  body("password")
  .isLength({ min: 8 })
  .withMessage("Password must be at least 8 characters")
  .matches(/[A-Z]/)
  .withMessage("Password must contain one uppercase letter")
  .matches(/[a-z]/)
  .withMessage("Password must contain one lowercase letter")
  .matches(/[0-9]/)
  .withMessage("Password must contain one number")
  .matches(/[^A-Za-z0-9]/)
  .withMessage("Password must contain one special character")
];