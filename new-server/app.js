const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const authRoutes = require("./routes/auth.routes.js")

const postRoute = require("./routes/post.routes.js")

const app = express();

// ==============================
// Middlewares
// ==============================

// app.use(cors());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use("/api/auth" , authRoutes)

app.use("/api/post" , postRoute)



// db connect code 

// ==============================
// Health Check Route
// ==============================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 PostPilot AI Backend Running Successfully",
  });
});

// ==============================
// Export App
// ==============================

module.exports = app;