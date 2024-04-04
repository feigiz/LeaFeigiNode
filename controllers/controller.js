import { TodoService } from '../service/todoService.js'

function ErrorHandling(ex, next) {
    const err = {};
    err.statusCode = 500;
    err.message = ex;
    next(err)
}

export class TodoController {
    async getTodo(req, res, next) {
        try {
            const todoService = new TodoService();
            const resultItems = req.query.userId ? await todoService.getTodoByUserId(req.query.userId) : await todoService.getTodo();
            return res.status(200).json(resultItems);
        }
        // catch (ex) { ErrorHandling(ex, next) }
        catch (ex) {
            const err = {};
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    async getTodoById(req, res, next) {
        try {
            const todoService = new TodoService();
            const resultItem = await todoService.getTodoById(req.params.id);
            // res.status(200).json({ status: 200, data: resultItem });
            res.status(200).json(resultItem);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    async addTodo(req, res, next) {
        try {
            const todoService = new TodoService();
            const resultItem = await todoService.addTodo(req.body);
            res.status(200).json(resultItem.insertId);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    async deleteTodo(req, res, next) {
        try {
            const todoService = new TodoService();
            await todoService.deleteTodo(req.params.id)
            res.status(200).json({ status: 200, data: req.params.id });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    async updateTodo(req, res, next) {
        try {
            const todoService = new TodoService();
            await todoService.updateTodo(req.body, req.params.id);
            res.status(200).json({ status: 200, data: req.params.id });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }
}