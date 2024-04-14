import jwt from 'jsonwebtoken';

export const authMiddleware = (req,res,next) =>{
    try{
        const token = req.cookies.token;
        if(!token){
            res.status(400).json({message:"Token donot exist"});
            return;
        }
        const payload = jwt.verify(token,"ThisisasecretKey");
        req.id = payload.userId;
        next();
    }catch(err){
        console.log(err.message);
        res.status(500).json({message:"Cannnot Verify Token"});
    }
}