const ApiError = require("../utils/ApiError");

if (existingUser) {
  throw new ApiError(409, "Email already exists");
}

if (!user) {
  throw new ApiError(401, "Invalid Credentials");
}

if (!match) {
  throw new ApiError(401, "Invalid Credentials");
}

module.exports = ApiError;