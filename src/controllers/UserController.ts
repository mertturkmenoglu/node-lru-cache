import { Request, Response } from "express";
import IUserService from "../services/IUserService";
import UserServiceImpl from "../services/UserServiceImpl";

const userService: IUserService = new UserServiceImpl();

const getUserInfo = async (req: Request, res: Response) => {
  const user = await userService.getUserFromUsername(req.params.username)
  return res.json(user);
}


export default {
  getUserInfo,
};