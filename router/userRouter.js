
import express from "express";
import { UserController } from '../controllers/userController.js'
// import { todoRouter } from "./todoRouter.js";

const userRouter = express.Router();

const usercontroller = new UserController()

// const response = await fetch(`http://localhost:8080/users?username=${name}&&website=${password}`);

userRouter.get("/:id", usercontroller.getUserById)
userRouter.get("/", usercontroller.getUser)
userRouter.post("/", usercontroller.addUser)
userRouter.post("/:username", usercontroller.checkUserPassword)
userRouter.delete("/:id", usercontroller.deleteUser)
userRouter.put("/:id", usercontroller.updateUser)

export {
    userRouter
}