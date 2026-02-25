import mongoose from "mongoose";
import {z} from "zod";

export const createTodoSchema=new mongoose.Schema({
    title :z.string().min(1,"title is required ").max(100,"title must be less then 100 character").trim(),
    description:z.string().max(500,"Description must be les the 500 character").trim(),
    priority:z.enum(["low","medium","default"]).default("medium")
})