
import {createUser} from "@/controllers/userController"
import dataBaseConnection from "@/lib/mongodb"

export async function GET(){
    await dataBaseConnection()
    const data =  await createUser()
    return Response.json(data)
}