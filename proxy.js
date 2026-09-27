import { NextResponse } from "next/server";

export function proxy(request) {

    console.log("middleware")
  const token = request.cookies.get("token")?.value;
   console.log("TOKEN:", token);
 if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*","/rooms/:path*"],
};