import mongoose from "mongoose";

const uri = "mongodb+srv://dhanushk22cse:yDCBAc9k0WZS63fC@cluster0.vmrp4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const dbConnect = async()=>{
    try {
        mongoose.connect(uri);
        console.log('Database connected Successfully');
    } catch (error) {
        console.log('Database not connected');
    }
}

export default dbConnect;