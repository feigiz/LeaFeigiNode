import { TodoService } from '../service/todoService.js'

export class TodoController {
    async getTodo(req, res, next) {
        try {
            const todoService = new TodoService();
            console.log(req.query);
            const resultItems = await todoService.getTodo(req.query);
            // if (resultItems.length > 0)
                return res.status(200).json(resultItems);
            // return res.status(204).json(resultItems);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    async getTodoById(req, res, next) {
        try {
            const todoService = new TodoService();
            const resultItem = await todoService.getTodoById(req.params.id);
            // if (resultItem)
                res.status(200).json(resultItem);
            // const err = {}
            // err.statusCode = 404;
            // err.message = 'todo not found';
            // next(err)
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
            console.log("aaa")
            console.log(req.body)
            const resultItem = await todoService.addTodo(req.body);
            res.status(200).json(resultItem.insertId);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            // err.statusCode = ex.errno == 1456 ? 400 : 500;
            err.message = ex;
            next(err)
        }
    }

    async deleteTodo(req, res, next) {
        try {
            const todoService = new TodoService();
            await todoService.deleteTodo(req.params.id)
            res.status(200).json(req.params.id);
            // if (resultItems.affectedRows > 0)
            //     res.status(200).json({ status: 200, data: req.params.id });
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
            res.status(200).json(req.params.id);
            // const resultItems = await todoService.updateTodo(req.body, req.params.id);
            // if (resultItems.affectedRows > 0)
            //     res.status(200).json({ status: 200, data: req.params.id });
            // const err = {}
            // err.statusCode = 404;
            // err.message = "todo not found";
            // next(err)
        }
        catch (ex) {
            const err = {}
            // err.statusCode = ex.errno == 1054 ? 400 : 500;
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }
}