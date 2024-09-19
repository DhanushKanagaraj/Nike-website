import mongoose, { model } from "mongoose";
import { Schema } from "mongoose";

const user = new Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    }
})

const userData =  model('Register_data',user);
export default userData;