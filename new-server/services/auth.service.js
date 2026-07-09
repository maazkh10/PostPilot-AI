const bcrypt = require("bcrypt")
const prisma  = require ("../config/prisma.js")

const genrateToken = require("../utils/generateToken.js")

const apiError = require("../utils/ApiError.js")


const registerUser = async ({name , email , password}) => {
    
    const existingUser = await prisma.user.findUnique({
        where : {
            email
        }
    })

    if (existingUser) {
        throw new apiError( 400,"user alredy exissit")
    }


    const hashPass = await bcrypt.hash(password , 10)

    const user = await prisma.user.create({
        data : {
            name , email , password: hashPass
        }
    })

    const token = genrateToken(user.id)

    return{
        user:{
            id : user.id,
            name: user.name,
            email : user.email
        },
        token
    }
}



const loginUser = async ( { email , password }) =>{
    const user = await prisma.user.findUnique({
        where:{
            email
        }
    })

    if (!user) {
        throw new apiError(400, "Invalid credential")
    }

    const isMatch = await bcrypt.compare(password , user.password)

    if (!isMatch) {
        throw new apiError(400 , "Password wrong error")
    }

    const token = genrateToken(user.id)

    return{
        user : {
            id : user.id , 
            name : user.name,
            email : user.email
        } , 
        token
    }
}

module.exports= {
    loginUser , 
    registerUser
}