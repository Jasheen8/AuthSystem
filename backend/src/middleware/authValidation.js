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
  .withMessage(
    "Password must be at least 8 characters"
  )
  .matches(/[A-Z]/)
  .withMessage(
    "One uppercase required"
  )
  .matches(/[0-9]/)
  .withMessage(
    "One number required"
  ),
];