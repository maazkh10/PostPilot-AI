
const   {createPost , 
    getAllPost , 
    updatePost  , deletePost } = require("../services/post.service.js")



const  PostCreateControler = async (req , res , next) => {
    
    try {

        const postData = req.body

        // dynamic 
        // const userId = req.user.id
        
        // static 
        const userId = 1
        const result = await createPost(
            postData , userId
        )
        res.status(200).json({
            success: true,
            message :  "Post Created Succufuly", 
            data : result
        })
    } catch (error) {
        next(error)
    }
}



const updatePostControler = async (req , res , next) => {
    try {
        const updateData = req.body
        const postId = Number(req.params.id);
        const userId = 1;
        const result = await updatePost(
            postId,  updateData   , userId
    );
    res.status(200).json({
        success : true,
        message: "post updated succefully",
        data : result
    })
    } catch (error) {
        next(error)
    }
}



const getAllPostControler = async (req , res , next) =>{

    try {
        const userId = 1;
        const resulr = await getAllPost(userId)

        return res.status(200).json({
            success : true,
            message : "all post fetched succefully",
            data : resulr
        })
    } catch (error) {
        next(error)
    }
}

const deletePostControler =  async (req , res , next) => {

    const postId = Number(req.params.id )
    const userId = 1;
        
    const resule = await deletePost(postId , userId);
    res.status(200).json({
        success: true,
        message: "deleted succefully",
        data : resule
    })
}
module.exports = {PostCreateControler
    , getAllPostControler 
    , updatePostControler , deletePostControler}
