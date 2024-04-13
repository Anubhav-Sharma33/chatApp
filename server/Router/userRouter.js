import {Router} from 'express';
import bcrypt from 'bcrypt';
import jwt from 'json-web-token';
import { User } from '../model/User';
import { authMiddleware } from '../middleware/authMiddleware';


export const userRouter = Router();

userRouter.post('signin',async(req,res)=>{

});

userRouter.post('/signup',async(req,res)=>{

});

userRouter.post('/logout',authMiddleware,async(req,res)=>{

});

userRouter.get('/onlineUser',authMiddleware,(req,res)=>{

});
