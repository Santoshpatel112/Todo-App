import { error } from "console";
import mongoose from "mongoose";
import { promise } from "zod";

const MONGO_URI=process.env.MONGO_URI;
if(!MONGO_URI){
    throw new error("Please defind the mongodb in the env variable");
}
let cached=global.mongoose;
if(!cached){
    cached=global.mongoose={conn:null ,promise:null};
}
async function ConnectDb(){
    if(cached.conn){
        return cached.conn;
    }

    if(!cached.conn){
        cached.promise=mongoose.connect(MONGO_URI).then((mongoose)=>{
            return mongoose;
        })
    }
    try {
        cached.conn=await cached.promise;
    } catch (error) {
        cached.promise=null;
        throw error
    }
    return cached.conn;
}
export default ConnectDb;