import { Request,Response } from "express";
import { Login } from "../../types"
import Services from "../../service";
import { InferAttributes } from "sequelize";
import User from "../../database/models/user";

export default class UserController {
  constructor (
    private service = new Services.UserService(),
  ) { }
  public async signIn(req: Request, res: Response) {
    const user: Login = req.body;
    const  { status, payload } = await this.service.signIn(user);
    return res.status(status).json(payload);
  }
  public async createUser(req: Request, res: Response) {
    const user: InferAttributes<User> = req.body;
    const {status, payload} = await this.service.createUser(user);
    return res.status(status).json(payload);
  }
}