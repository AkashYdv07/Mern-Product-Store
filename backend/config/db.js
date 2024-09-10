import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');
    }
    catch (err) {
        console.error(err.message);
        process.exit(1); // process 1 code means exit with failure and 0 means success
    }
}