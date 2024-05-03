import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

/* Extend Express Request type */
declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}

/* Cross-check cookie value from client */
const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies["auth_token"];

  if (!token) return res.status(401).send({ message: "Unauthorized Access" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string);
    req.userId = (decoded as JwtPayload).userId;
    next();
  } catch (error) {
    return res.status(401).send({ message: "Unauthorized Access" });
  }
};

export default verifyToken;
