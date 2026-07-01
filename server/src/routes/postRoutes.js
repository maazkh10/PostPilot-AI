import express from "express"
import { createPost ,  getPostById , findUserPost} from "../controllers/postController.js"

const router = express.Router()

router.post("/posts" , createPost)

router.get("/post/:id"  , getPostById)

router.get("/post/user/:userId" , findUserPost)

// console.log("Post router loaded");



export default router