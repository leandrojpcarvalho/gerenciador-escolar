import { Router, RouterOptions } from 'express';
import Middlewares from '../../middlewares';
import Controllers from '../../controllers';

const userController = new Controllers.UserController();


// class Routes {
//   constructor(
//     private login = Router(),
//     private loginValidation = Middlewares.loginValidation, 
//     private signIn = userController.signIn,
//   ){
//     this.login.post('/', this.loginValidation, this.signIn);
//   }
//   public getLoginRoute() {
//     return this.login;
//   }
// }
const login = Router();

login.post('/', Middlewares.loginValidation, (req, res) => userController.signIn(req, res));

export default login;