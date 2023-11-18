import { InferAttributes } from "sequelize";
import User from "../../database/models/user";

export default class UserModel {
  private model = User;

  public async create(data: InferAttributes<User>): Promise<User> {
    const dbData = await  this.model.create(data);
    return dbData;
  }

  public async findAll(): Promise<User[]> {
    const dbData = await this.model.findAll();
    return dbData;
  }

  public async findOne(email:string): Promise<User|null> {
    const dbData = await this.model.findOne({where: { email }})
    return dbData;
  }
}