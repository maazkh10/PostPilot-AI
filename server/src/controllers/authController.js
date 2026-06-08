import User from '../models/User.js'
import bcrypt from 'bcryptjs'
export const RegistrationContrl = async (req , res) =>{
    try {
        const {name , email , password} = req.body

        const userExist = await User.findOne({email})

        if (userExist) {
            res.status(400).json({message:"Email alredy there"})
        }
      const newUser = await User.create({
        name , 
        email,
        password
      })

      res.status(201).json({
        message:"User registration succufully  "
      })
    } catch (error) {
        console.error("Registration error," , error)
        res.status(500).json({
            message:"Server erropr pls try again later"
        })
    }
}


export const loginContr = async (req , res) =>{

    try {
        const {email , password} = req.body;

    const user = await User.findOne("email")
 
    if(!user){
        res.status(401).json({message:"this user not found"})
    }
   const isCompare = await bcrypt.compare(password , user.password);

   if (!isCompare) {
    return res.status(400).json({ message: "Invalid email or password" });
   }

   res.status(200).json({
    message: "Login succufully" , 
    user : {
        id : user._id,
        name: user.name,
        email: user.email
    }
   })
    }
    catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Server error, please try again" });
    }
}