import mongoose from "mongoose";

export const connectDb = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDb connected connect`)
    } catch (error) {
        console.error(`Databse connection error : ${error.message}`)
        process.exit(1)
    }
}


