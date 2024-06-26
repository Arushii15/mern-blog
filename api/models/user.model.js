import mongoose from "mongoose";
import { type } from "os";

const userSchema =new mongoose.Schema({
    userSchema:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
    },
},{timestamps:true})

const User =mongoose.model('User',userSchema);

export default User;