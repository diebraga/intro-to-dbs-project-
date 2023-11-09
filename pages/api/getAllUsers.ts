import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { getAllUsers } from "@/utils/getAllUsers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("JWT secret is not defined");
    }

    jwt.verify(token, secret);

    const users = await getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(403).json({ error: "Invalid token" });
    }
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
