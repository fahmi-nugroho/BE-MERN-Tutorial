import { User } from "../models/user.model";
import { Types } from "mongoose";
import jwt from "jsonwebtoken";
import { SECRET } from "./env";
import { IUserToken } from "./interfaces";

export const generateToken = (user: IUserToken) => {
  return jwt.sign(user, SECRET, { expiresIn: "1h" });
};
export const getUserData = (token: string) => {
  return jwt.verify(token, SECRET) as IUserToken;
};
