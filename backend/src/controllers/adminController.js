exports.getDashboard = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome Admin",
    admin: req.user,
  });
};