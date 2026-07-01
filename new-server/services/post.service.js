const prisma  = require ("../config/prisma.js")

const ApiError  = require("../utils/ApiError.js")


const createPost = async (postData , userId) => {

    const {
    title,
    caption,
    hashtags,
    platform,
    status,
    scheduledAt
} = postData;

if (!title || !caption || !platform) {
    throw new ApiError(400, "all fiilded are required")
}

// bussness logic

if (status === "Scheduled" && !scheduledAt) {
    throw new ApiError(
        400 , 
        "scheduletedAt is required"
    )
}


const post = await prisma.post.create({
    data:{
        title,
        caption,
        hashtags,
        platform,
        status : status || "Draft",
        scheduledAt,
        userId
    }

})
    return post
}


const updatePost = async (postId , updateData , userId) => {

    // finidn post by post id 
    const post = await prisma.post.findUnique({
        where : {
            id : postId,
        }
    })
    if (!postId) {
        throw new ApiError(404 , "no post find on this")
    }

    if (post.userId !== userId) {
        throw new ApiError(403, "u are not allow to eid this post")
    }


    const updatePosts = await prisma.post.update({
        where:{
            id : userId,
        },
        data: updateData
    });

    return updatePosts
}



const deletePost = async (postId , userId) => {

    const post = await prisma.post.findUnique({
        where: {
            id : postId,
        }
    })

    if (!post) {
        throw new ApiError(404 , "not found any post at all bitch")
    }

    // if (post.postId !== userId) {
    //     throw new ApiError(401 , "user not allow to delete this post")
    // }

    const deleteit = await prisma.post.delete({
        where:{
            id: postId
        }
    })
    return deleteit
}
module.exports = {createPost , updatePost , deletePost}