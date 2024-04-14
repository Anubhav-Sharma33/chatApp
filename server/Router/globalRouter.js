import {Router} from 'express';
import { userRouter } from './userRouter.js';
import { messageRouter } from './messageRouter.js';

export const globalRouter = Router();

globalRouter.use('/user',userRouter);
globalRouter.use('/message',messageRouter);

