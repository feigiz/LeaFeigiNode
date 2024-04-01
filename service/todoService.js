
import { executeQuery } from './db.js';
import { getTodoQuery, getTodoByIdQuery, addTodoQuery, deleteTodoQuery, updeteTodoQuery, getTodoByUserIdQuery } from './queryTodo.js'

export class TodoService {

    async getTodo() {
        const queryTodo = getTodoQuery();
        const result = await executeQuery(queryTodo);
        return result;
    }

    async getTodoById(id) {
        const queryTodo = getTodoByIdQuery();
        const result = await executeQuery(queryTodo, [id]);
        return result;
    }

    async getTodoByUserId(id) {
        const queryTodo = getTodoByUserIdQuery();
        const result = await executeQuery(queryTodo, [id]);
        return result;
    }

    async addTodo(newTodo) {
        console.log(newTodo)
        const queryTodo = addTodoQuery();
        await executeQuery(queryTodo, Object.values(newTodo));
    }

    async deleteTodo(id) {
        const queryTodo = deleteTodoQuery();
        await executeQuery(queryTodo, [id]);
    }

    // async updeteTodo(id) {
    //     const queryTodo = updeteTodoQuery();
    //     await executeQuery(queryTodo, [id]);
    // }
}