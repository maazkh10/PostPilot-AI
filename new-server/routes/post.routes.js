const express = require("express")

const {PostCreateControler , updatePostControler , deletePostControler} = require('../controllers/post.controller.js')
const router = express.Router()

router.post("/postcre", PostCreateControler)

router.put("/:id", updatePostControler)

router.delete("/:id" , deletePostControler)


module.exports = router