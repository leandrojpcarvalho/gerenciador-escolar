import { Router } from 'express';
import Middlewares from '../../middlewares';
import Controllers from '../../controllers';


const login = Router();

login.post('/', Middlewares.loginValidation, Controllers.login.signIn);

export default login;