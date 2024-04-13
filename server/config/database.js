import mongoose from 'mongoose';

export async function connectToDatabase(){
    try{
        const response = await mongoose.connect('mongodb+srv://anubhvsharma33:anubhavsharma33@chatapp.lt45quj.mongodb.net/chatApp?retryWrites=true&w=majority&appName=ChatApp');
        console.log("Database Connected");
    }catch(err){
        console.log(err.message);
    }
}