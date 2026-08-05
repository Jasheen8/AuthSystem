const authorize = (...roles) => {
  return (req, res, next) => {

    console.log("User Role:", req.user.role);

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "Forbidden: You don't have permission."
      });
    }

    next();
  };
};

module.exports = authorize;