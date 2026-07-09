

const { 
    registerUser , loginUser
}  = require("../services/auth.service")


// const register = async(req , res , next) => {
//     try {
//         const { name, email, password } = req.body;

//         const result  = await registerUser({
//             name , email , password
//         });
//         res.status(201).json({
//             success: true,
//             message : "User register successfully",
//             data : result
//         })
//     } catch (error) {
//         next (error)
//     }
// }



const register = async (req , res , next) => {
    try {
        const result = await registerUser(req.body)

        return res.status(201).json({
            success : true,
            message : "User register successfully",
            data : result
        })
    } catch (error) {
        return res.status(400).json({
            success : false,
            message : error.message
        })
    }
}


const login = async (req , res , next) =>{
    try {
        const { email , password} = req.body;

        const result = await loginUser({
            email , password
        })
      return  res.status(200).json({
            success : true,
            message : "succef",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    register, login
}