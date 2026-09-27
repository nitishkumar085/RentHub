import { createUser } from "../../../controllers/userController.js";
import Users from "@/models/usermodel.js"
import dataBaseConnection from "@/lib/mongodb";

export async function POST(request) {
   
         await dataBaseConnection()  // first crate database connection  or check already existed or not , beacuse other it will trying new connection
         const requestData = await request.json()
        //  console.log(requestData)
       const data = await createUser(requestData)
   
        //  const data =  await createUser()
  return Response.json({data:"user added", data})
   
}