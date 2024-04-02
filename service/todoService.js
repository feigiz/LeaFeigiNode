
import { executeQuery } from './db.js';
import { getTodoQuery, getTodoByIdQuery, addTodoQuery, deleteTodoQuery, updateTodoQuery, getTodoByUserIdQuery } from './queryTodo.js'

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
        const queryTodo = addTodoQuery();
        await executeQuery(queryTodo, Object.values(newTodo));
    }

    async deleteTodo(id) {
        const queryTodo = deleteTodoQuery();
        await executeQuery(queryTodo, [id]);
    }

    async updateTodo(updatedTodo, id) {
        // const data = Object.entries(updating).map(([key, value]) => (key, value));
        // data.push(id)
        // console.log("data");
        // console.log(data);
        // const queryTodo = updateTodoQuery();
        // // await executeQuery(queryTodo, Object.keys(updating), Object.values(updating), id);
        // await executeQuery(queryTodo, data);

        let data = Object.values(updatedTodo);
        data.push(id)
        const queryTodo = updateTodoQuery();
        await executeQuery(queryTodo, data);
    }
}