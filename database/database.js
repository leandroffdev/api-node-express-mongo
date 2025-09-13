import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado ao banco");
    } catch (error) {
        console.error(`Ërro ao conectar com o banco. ${error}`)
    }
}

export default connectDB;