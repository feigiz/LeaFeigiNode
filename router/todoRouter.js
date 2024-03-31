
import express from "express";
import { TodoController } from '../controllers/todoController.js'
const todoRouter = express.Router();

const todocontroller = new TodoController()
//localhost:8080/todo/12

// fetch(`http://localhost:8080/todos?userId=${userDetails.id}`)

//localhost:8080/todo?userId=12
//localhost:8080/todo/user/12
// todoRouter.get("/", todocontroller.getTodoByUserId)
todoRouter.get("/:id", todocontroller.getTodoById)
todoRouter.get("/", todocontroller.getTodo)
todoRouter.post("/", todocontroller.addTodo)
todoRouter.delete("/:id", todocontroller.deleteTodo)
todoRouter.put("/:id", todocontroller.updateTodo)

export {
    todoRouter
}