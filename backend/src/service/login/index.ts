import User from '../../models/user';
import { Service, Login, Token, Error } from '../../types';
import { Op } from 'sequelize';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.SECRET_TOKEN || 'AlgumaCoisa';

export const signIn: Service<Login, Token | Error> = async ({
  email,
  password,
}) => {
  const response = await User.findOne({
    where: { email, password },
    attributes: { exclude: ['password'] },
    raw: true,
  });
  if (!response) return { status: 404, payload: { message: 'Not Found' } };
  const payload = { token: jwt.sign(response, JWT_SECRET) };
  return { status: 200, payload };
};
