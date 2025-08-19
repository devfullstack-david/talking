import jwt from 'jsonwebtoken';
import User from '../models/user.ts';
import { Request, Response, NextFunction } from "express";
import { DecodedToken } from '../types/middlewares/decoded-token.ts';

export const protectRoute = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized - No Token Provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || '') as DecodedToken;

    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized - Invalid Token" });
    };

    let user;

    if (decoded.userId) {
      user = await User.findById(decoded.userId).select("-password");
    }

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if ('user' in req) {
      req.user = user;
    };

    next();

  } catch (error) {
    
  }
};