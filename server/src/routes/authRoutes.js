import express from "express"
import { RegistrationContrl , loginContr } from "../controllers/authController.js"
const Router = express.Router()

Router.post("/register" , RegistrationContrl)

Router.post("/login" , loginContr) 

export default Router;