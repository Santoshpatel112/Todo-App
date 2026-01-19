import { Button } from "@/components/ui/button";
import Image from "next/image";
import ConnectDb from "../lib/db.js"
export default async function Home() {
  const conn=await ConnectDb();
  console.log("Db Connected Sucessfully");
  return (
    <>
    <Button>Welcome to TODO-app</Button>
    </>
  )
}
