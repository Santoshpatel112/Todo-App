"use server"

import { revalidatePath } from "next/cache"
import ConnectDb from "../lib/db"
import Todo from "@/model/todo"

import  {createtodoSchema} from "../validations/todo";

export async function createTodo(data){
    try {
        const validateddata=createtodoSchema.parse(data);
        await ConnectDb();

        const todo=await Todo.create(validateddata);

        return {
            success :true,
            data :JSON.parse(JSON.stringify(todo))
        }
    } catch (error) {
        console.log("Error Creating todo :",error);
        return{
            success :false,
            error:error instanceof Error ? error.message : "failed to create todo"
        }
    }
}