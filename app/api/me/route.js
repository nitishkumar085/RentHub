import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function GET() {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return Response.json({ message: "Not logged in" }, { status: 401 });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  return Response.json({
    userId: decoded.id,
  });
}