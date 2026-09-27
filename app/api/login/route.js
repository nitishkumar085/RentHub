import { loginUser } from "@/controllers/userController";
import dataBaseConnection from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req){
    await dataBaseConnection() // make new connection or check conection is already existed 
    const requestData = await req.json() // we need to parse json data
    const data = await loginUser(requestData)
    const response = NextResponse.json({
      message: "Login successful",
      data,
    });
       // set HTTP-only cookie
    response.cookies.set({
      name: "token",
      value: data.token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return response;
  
  
}