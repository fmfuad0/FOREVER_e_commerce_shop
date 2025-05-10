import mongoose from "mongoose";

export const connectDB = async ()=>{
    const connectionString = process.env.MONGODB_URI;
    await mongoose.connect(connectionString);
}
