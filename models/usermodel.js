import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema = new mongoose.Schema({
    usernane:{
        type:String,
        unique:true,
        required:true
    },
    email:{
         type:String,
        unique:true,
        required:true
    },
    password:{
         type:String,
        required:true
    }
})



export default mongoose.models.User || mongoose.model("User", userSchema);