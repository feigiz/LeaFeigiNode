
import { executeQuery } from './db.js';
import { getTodoQuery, getTodoByIdQuery, addTodoQuery, deleteTodoQuery, updateTodoQuery } from './queryTodo.js'

export class TodoService {

    async getTodo(queryparams) {
        const queryTodo = getTodoQuery(queryparams);
        const result = await executeQuery(queryTodo);
        return result;
    }

    async getTodoById(id) {
        const queryTodo = getTodoByIdQuery();
        const result = await executeQuery(queryTodo, [id]);
        return result;
    }

    async addTodo(newTodo) {
        const queryTodo = addTodoQuery(Object.keys(newTodo));
        const result = await executeQuery(queryTodo,Object.values(newTodo));
        return result;
    }

    async deleteTodo(id) {
        const queryTodo = deleteTodoQuery();
        await executeQuery(queryTodo, [id]);
    }

    async updateTodo(updatedTodo, id) {
        let data = Object.values(updatedTodo);
        data.push(id)
        const queryTodo = updateTodoQuery();
        await executeQuery(queryTodo, data);
    }
}