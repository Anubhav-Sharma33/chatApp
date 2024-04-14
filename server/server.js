import express from "express";
import initializeSocket from "./socket.js";
import { createServer } from "http";
import cors from 'cors';
import { connectToDatabase } from "./config/database.js";
import { globalRouter } from "./Router/globalRouter.js";
import cookieParser from "cookie-parser";


const port = 3000;
const app = express();
const httpServer = createServer(app);
const corsOption = {}; //Create a cors Option

cors();
connectToDatabase();
initializeSocket(httpServer);

app.use(cookieParser());
app.use(express.json());
app.use('/v1',globalRouter);

httpServer.listen(port,()=>{
    console.log(`Server Started at port ${port}`);
});