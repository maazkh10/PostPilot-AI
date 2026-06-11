import mongoose from "mongoose";

const ShedulePostSchema = mongoose.Schema({
    userId : {
        type : String,
        required : true,
        default : Math.floor(Math.random() * 10000).toString()
    },
    postId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "genpost" ,
        required : true
    },
    scheduledAt : {
        type : Date,
        required : true
    }, 
    status :{
        type : String,
        enum: ["pending" , "completed" , "failed" , "cancelled"] ,
        default : "pending" , 
        required  : true
    }, 
    
} , {
    timestamps : true
})


const shedulepost = mongoose.model("shedulepost" , ShedulePostSchema)

export default shedulepost;