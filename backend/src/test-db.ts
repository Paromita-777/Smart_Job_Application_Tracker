import dotenv from "dotenv"
import mongoose from "mongoose"
import { DB_NAME } from "./constants";

dotenv.config()
const mongoUri = process.env.MONGO_URI as string;
const uriWithDB = `${mongoUri}${DB_NAME}`;

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(uriWithDB);
    console.log(`✅ MongoDB Connected to ${DB_NAME}`);
  } catch (error: any) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1);
  }
};

const testSchema = new mongoose.Schema({ name: String });
const Test = mongoose.model("Test", testSchema);

async function addTest() {
  await Test.create({ name: "Paromita" });
  console.log("Test document inserted");
  process.exit(0); // exit after inserting
}

connectDB().then(addTest);

