import {Router} from 'express';
import { authMiddleware } from '../middleware/authMiddleware.js';

export const messageRouter = Router();

messageRouter.use(authMiddleware);

messageRouter.post('send/:id',(req,res)=>{

});

messageRouter.get('getMessage',(req,res)=>{

});