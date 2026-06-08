import mongoose from "mongoose";
import User from "./User";

const GenratepostSchema = mongoose.Schema({
    topic: {
        type: String,
        required: true,
        trim: true
    },
    tone: {
        type: String,
        trim: true,
        default: "proffectional"
    },
    linkedinPost: {
        type: String,
        trim: true,
    },

    instagramPost: {
        type: String,
        trim: true,
    },
    twitterPost: {
        type: String,
        trim: true,
    },
    hashtags: {
        type: [String],
        default: []
    },
    cta: {
        type: String,
        trim: true
    },
    imagePrompt: {
        type: String,
        trim: true
    },

    // userId:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    //     required : true

    // }

    userId: {
    type: String,
    require: true,
    default: () => Math.floor(Math.random() * 100000).toString()
}


})

const GenratePost  = mongoose.model("genposat" ,GenratepostSchema )

export default GenratePost
