import { InferAttributes, Optional } from 'sequelize';
import { Login, Token, Error, ServiceResponse } from '../../types';
import { StatusCodes }from 'http-status-codes';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../database/models/user';
import Models from '../../models';
import { Return } from '../../class';

const JWT_SECRET = process.env.SECRET_TOKEN || 'AlgumaCoisa';
const salt = bcrypt.genSaltSync(10);

export default class UserService {
  constructor(
    private userModel = new Models.UserModel(),
    private response =  Return,
  ) {}

  public async signIn({
    email,
    password,
  }: Login): Promise<ServiceResponse<Token | Error>> {
    const response = await this.userModel.findOne(email);
    if (response && this.compare(password, response.dataValues.password)) {
      return new this.response(StatusCodes.ACCEPTED, this.tokenGenerator(response.dataValues));
    } 
    return new this.response(StatusCodes.NOT_ACCEPTABLE, { message: 'Email or Password incorrect'});
  }
  public async createUser(body: InferAttributes<User>): Promise<ServiceResponse<InferAttributes<User> | Error>> {
    const isNotUniqueEmail = await this.userModel.findOne(body.email);
    if(isNotUniqueEmail) return new this.response(StatusCodes.BAD_REQUEST, { message: 'has an account associated at this email'})
    const { dataValues } = await this.userModel.create({ ...body, password: this.encrypt(body.password)});
    return new this.response(StatusCodes.CREATED, dataValues);
  }
  private tokenGenerator(payload: InferAttributes<User>): Token  {
    const user: InferAttributes<Optional<User, 'password'>> = payload;
    delete user.password;
    const token = jwt.sign(user, JWT_SECRET);
    return { token };
  }
  private encrypt(password: string) {
    return bcrypt.hashSync(password, salt)
  }
  private compare(password: string, hash: string) {
    return bcrypt.compareSync(password, hash)
  }
}