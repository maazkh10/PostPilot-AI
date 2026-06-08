import GenratePost from "../models/GeneratedPost.js";
import { savePost , deletePost , findPostbyId , findUserPosts} 
from "../services/postService.js";


export const createPost = async (req , res) =>{
    
    try {
        const postData = req.body;

        const newPost = await savePost(postData)

         return res.status(201).json({
            success : true,
            message : "Post created succefully",
            data : newPost
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : "fail to creater",
            error : error.message
        })
    }
}


const getPostById = async(req , res) =>{
    try {
        const postId = req.params.id,
         
        const post = await findPostbyId(postId)
    
        if (!post) {
            return res.status(500).json({
                success: false,
                message : "Fail to get the data "
            })
        }
        return res.status(200).json({
            success: true,
            message : "get the post" , 
            data : post
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "An error occurred while tracking down the post records.",
            error: error.message
        });
    }
}


const findUserPost = async (req , res) =>{
    try {
        const userPost = req.params.id
        
        const post = await findUserPosts(userPost)
        
        if (!post) {
            return res.status(401).json({
                success: false,
                message: "fail to get that pls"
            })
        }
        return res.status(201).json({
            success : true,
            message: "find userPost",
            data : post
        })
    } catch (error) {
 return res.status(500).json({
            success: false,
            message: "An error occurred while tracking down the post records.",
            error: error.message
        });       
    }
}

const deletePost = async (req , res) =>{
    try {
        const usearId = req.params.id

        const deledPost = await deletePost(usearId)

        if (!deledPost) {
            return res.status(404).json({
                success : false,
                message :"posat not found"
            })
        }



    } catch (error) {
        
    }
}