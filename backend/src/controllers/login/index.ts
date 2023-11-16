import Service from "../../service";
import { Controller } from "../../types"

export const signIn:Controller = async (req, res) => {
  const { body } = req;
  const {status, payload} = await Service.login.signIn(body);
  return res.status(status).json(payload);
}