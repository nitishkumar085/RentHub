import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({
    success: true,
    message: "Logout successful",
  });

  // Clear cookie
  response.cookies.set("token", "", {
    httpOnly: true,
    expires: new Date(0), // Expire immediately
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });

  return response;
}