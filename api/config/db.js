import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config();

const dbconnect = async () => {
    const con = await mongoose.connect("mongodb://localhost:27017");
    if (con) {
        console.log('database connected successfully');
    }
}
export default dbconnect