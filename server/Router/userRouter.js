import {Router} from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../model/User.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import mongoose from 'mongoose';


export const userRouter = Router();

// Username,password,email from req.body
//Check if email exist in database
//If exist res.send("Already Exist")
//If Not create a username and send user info back in response;
//lets not generate token  now but redirect to login page
userRouter.post('/signup',async(req,res)=>{
    const {email,username,password} = req.body;
    try{
        const userExist = await User.find({email:email}).exec();
        if(userExist.length !== 0){
            res.status(400).json({error:{message:"User Already exists"}});
            return;
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const userData =  await User.create({
            username,
            email,
            password:hashedPassword
        })
        res.status(200).json({message:"Succesfully created user",userData});
    }catch(err){
        res.status(400).json({error:{message:"Server Internal Error"}});
    }
});

// get email and password from req.body
// Database userexist
// if no then response user donot exist
// Lets user exist verify password
// if password incorrect respnse failed
// password correct
// token generate for furthur req
// cookies store and res back
userRouter.post('/signin',async(req,res)=>{
    const {email,password} = req.body;
    try{
        const userExist = await User.find({email}).exec();
        if(userExist.length === 0){
            res.status(400).json({error:{message:"User donot exist"}});
            return;
        }
        const userData = userExist[0];
        console.log(userData);
        const verify = await bcrypt.compare(password,userData.password);
        if(verify){
            const payload = {email,userId:userData._id};
            const token = jwt.sign(payload,"ThisisasecretKey");
            res.cookie('token',token).status(200).json({message:"Successfully Logged In"});
        }else{
            res.status(400).json({message:"Password is Incorrect"});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:{message:"Internal Server Error"}});
    }
});


userRouter.post('/logout',async(req,res)=>{
    res.cookie('token','').status(200).json({message:"Successfully Logged Out"});
});

userRouter.get('/allUser',authMiddleware,async(req,res)=>{
    const userId = req.id;
    try{
        const users = await User.find({ _id:{ $ne:userId}}).select("-password");
        res.status(200).json({message:"Successfully got the User",users});
    }catch(err){
        console.log(err.message);
        res.status(500).json({message:"Server Error"});
    }
});
