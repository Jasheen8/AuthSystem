const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const errorHandler = require("./middleware/errorMiddleware");
const rateLimit = require("express-rate-limit");

const app = express();
app.set("trust proxy", 1);

app.use(helmet());

app.use(morgan("dev"));

// CORS
app.use(
  cors({
    origin: ["http://localhost:5173", "https://mern-auth-frontend-pz61.onrender.com"],
    credentials: true,
  }),
);

//middleware
app.use(express.json());

app.use(cookieParser());

//routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/users", userRoutes);
app.use(errorHandler);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,

  max: 100,

  message: {
    success: false,
    message: "Too many requests. Try again later.",
  },
});
app.use(limiter);

module.exports = app;
