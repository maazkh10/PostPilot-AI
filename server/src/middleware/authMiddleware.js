import jwt from "jsonwebtoken";

const protect = async (req , res , next) => {
    
    let token;

    if (req.header.authorization  && req.header.authorization.startsWith("Bearer")) {
     try {
        token = req.header.authorization.split(" ")[1];

        const decoded = jwt.verify(token , process.env.jwt_secreate || "super_secret_key_123");

        req.user = decoded;
        return next()
     } catch (error) {
        return res.status(401).json({message :"not authorizae, invaliode found"})
     }   

    }

    if(!token){
        return res.status(401).json({ message: 'Not authorized, no token provided' });
    }
}

module.exports = protect;