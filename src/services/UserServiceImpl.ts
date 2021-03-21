import axios from "axios";
import IUser from "../model/IUser";
import IUserService from "./IUserService";


export default class UserServiceImpl implements IUserService {
  readonly BASE_URL = "https://api.github.com";

  async getUserFromUsername(username: string): Promise<IUser | null> {
    const URL = `${this.BASE_URL}/users/${username}`;
    try {
      const resp = await axios.get<IUser>(URL);
      return resp.data;
    } catch (error) {
      return null;
    }
  }
}