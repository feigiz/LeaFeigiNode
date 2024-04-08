import express from "express";
import { LoginController } from '../controllers/loginController.js'

const loginRouter = express.Router();
const logincontroller = new LoginController()
loginRouter.post("/", logincontroller.checkUserPassword)
loginRouter.put("/", logincontroller.changePassword)

export { loginRouter }