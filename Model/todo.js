import mongoose  from "mongoose";
import { maxLength } from "zod";
const todoSchema=new mongoose.model({
  title :{
    type:String,
    required :[true,"title is required"],
    trim :true,
    maxLength:[100,"title can't exceed 100 character"]
  },
  description:{
    type:String,
    trim:true,
    maxLength:[500,"Descrition can't exceed 500 character"],
  },
  completed:{
    type:Boolean,
    default:false,
  },
  priority:{
    type:String,
    enum:["low","medium","high"],
    defalut:"medium"
  }  
},{
    timestamps:true
});

export default mongoose.models.Todo ||mongoose.model("Todo",todoSchema)