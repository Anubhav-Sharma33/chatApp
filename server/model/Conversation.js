import mongoose from 'mongoose';

const conversationSchema = mongoose.Schema({
    client1:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    client2:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    conversation:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Message'
        }
    ]
});

export const Conversation = mongoose.model('Conversation',conversationSchema);