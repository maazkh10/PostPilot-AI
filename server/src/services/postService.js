import GenratePost from "../models/GeneratedPost.js";

export const savePost = async(postData) =>{
    const post = new GenratePost(postData)

    const  saveData = await post.save()

    return saveData
}

export const findUserPosts = async ( userId) =>{
    const userpost = await GenratePost.find({userId})
    return userpost;
}

export const findPostbyId = async(postId) =>{

    const post = await GenratePost.findbyId(postId)
    return post
}


export const deletePost = async (postId) =>{

    const delPost = await GenratePost.findByIdAndDelete(postId)
    return delPost
}

export const countUserPosts = async (userId) =>{
    return await GenratePost.countDocuments({userId})
} 
