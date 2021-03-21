import IUser from "../model/IUser";

export default interface IUserService {
  readonly BASE_URL: string

  getUserFromUsername(username: string): Promise<IUser | null>
}