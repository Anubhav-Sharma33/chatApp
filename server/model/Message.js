import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
    senderId:String,
    receiverId:String,
    message:String,
    timeStamp:{
        type: Date,
        default:Date.now
    }
});

export const Message = mongoose.Schema('Message',messageSchema);