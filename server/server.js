import express from "express";
import cors from "cors";
import "dotenv/config"; // 1. This MUST be above your db import
import { connectDb } from "./src/config/db.js"; // 2. This runs AFTER dotenv is loaded
import RegesterAuth from "./src/routes/authRoutes.js"
import { loginContr } from "./src/controllers/authController.js";
const app = express();
const PORT = 4900;

// Middleware
app.use(cors());
app.use(express.json());

// 3. Connect to the DB
connectDb(); 





app.use("/api/signup" , RegesterAuth)


app.use("/api/auth" , loginContr)



app.get("/", (req, res) => {
    res.send("server running");
});



app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});