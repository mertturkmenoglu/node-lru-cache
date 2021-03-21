import { Request, Response } from "express";
import { cache } from "../app";
import { LRU_MAX_AGE } from "../config/LRUOptions";
import IUserService from "../services/IUserService";
import UserServiceImpl from "../services/UserServiceImpl";

const userService: IUserService = new UserServiceImpl();

const getUserInfo = async (req: Request, res: Response) => {
  const username = req.params.username;
  const user = await userService.getUserFromUsername(username);

  cache.set(username, JSON.stringify(user), LRU_MAX_AGE);

  return res.json(user);
}


export default {
  getUserInfo,
};