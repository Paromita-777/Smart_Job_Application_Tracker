import mongoose from "mongoose";
import { DB_NAME } from "../constants";


const connectDB = async() => {
  try{
    const mongoUri = process.env.MONGO_URI as string;
    const uriWithDB = `${mongoUri}${DB_NAME}`;
    await mongoose.connect(uriWithDB)
    console.log(`✅ MongoDB Connected to ${DB_NAME}`)
  }
  catch(error){
    console.error("Database connection failed!");
    process.exit(1);
  }
}

export default connectDB;