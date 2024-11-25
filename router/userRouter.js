
import express from "express";
import { UserController } from '../controllers/userController.js'

const userRouter = express.Router();

const usercontroller = new UserController()

userRouter.get("/:id", usercontroller.getUserById)
userRouter.get("/", usercontroller.getUser)
userRouter.post("/", usercontroller.addUser)
userRouter.delete("/:id", usercontroller.deleteUser)
userRouter.put("/:id", usercontroller.updateUser)
userRouter.patch("/", usercontroller.updatePassword)

export { userRouter }