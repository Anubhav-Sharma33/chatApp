import {Router} from 'express';
import { userRouter } from './userRouter';
import { messageRouter } from './messageRouter';

export const globalRouter = Router();

globalRouter.use('/user',userRouter);
globalRouter.use('/message',messageRouter);

