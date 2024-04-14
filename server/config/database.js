import mongoose from 'mongoose';

export async function connectToDatabase(){
    try{
        const response = await mongoose.connect('mongodb+srv://anubhvsharma33:anubhvsharma78144@cluster0.ayvbbiv.mongodb.net/chatApp?retryWrites=true&w=majority&appName=Cluster0');
        console.log("Database Connected");
    }catch(err){
        console.log(err.message);
    }
}