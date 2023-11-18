import express from 'express'
import UserController from '../../controllers/user';
import Middlewares from '../../middlewares';


const users = express.Router();
const userController = new UserController();

users.post('/',Middlewares.newUserValidation, (req,res) =>  userController.createUser(req, res));

export default users;