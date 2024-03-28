
import { executeQuery } from './db.js';
import { getTodoQuery ,getTodoByIdQuery, addTodoQuery, deleteTodoQuery, updeteTodoQuery} from './queryTodo.js'

export class TodoService {

    async getTodo() {
        const queryTodo = getTodoQuery();
        const result = await executeQuery(queryTodo);
        return result;
    }

    async getTodoById(id) {
        const queryTodo = getTodoByIdQuery();
        const result =  await executeQuery(queryTodo, [id]);
        return result;
    }

    async addTodo(newTodo) {
        const queryTodo = addTodoQuery(newTodo);
        await executeQuery(queryTodo);
    }

    async deleteTodo(id) {
        const queryTodo = deleteTodoQuery();
        await executeQuery(queryTodo, [id]);
    }

    async updeteTodo(id) {
        const queryTodo = updeteTodoQuery();
        await executeQuery(queryTodo, [id]);
    }
    
}