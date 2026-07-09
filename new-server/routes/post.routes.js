const express = require("express")

const {PostCreateControler ,
    updatePostControler , deletePostControler, getAllPostControler} = require('../controllers/post.controller.js')
const router = express.Router()

router.get("/" , getAllPostControler)

router.post("/postcre", PostCreateControler)

router.put("/:id", updatePostControler)

router.delete("/:id" , deletePostControler)


module.exports = router