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


