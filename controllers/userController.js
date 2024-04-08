import { UserService } from '../service/userService.js'

export class UserController {
    async getUser(req, res, next) {
        try {
            const userService = new UserService();
            console.log(req.query)
            const resultItems = await userService.getUser(req.query);
            if (resultItems.length > 0)
                return res.status(200).json(resultItems);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    async getUserById(req, res, next) {
        try {
            const userService = new UserService();
            const resultItem = await userService.getUserById(req.params.id);
            if (resultItem)
                res.status(200).json(resultItem);
            const err = {}
            err.statusCode = 404;
            err.message = 'todo not found';
            next(err)
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    async addUser(req, res, next) {
        try {
            const userService = new UserService();
            const resultItem = await userService.addUser(req.body);
            res.status(200).json(resultItem.insertId);
        }
        catch (ex) {
            const err = {}
            err.statusCode = ex.errno == 1062 ? 409 : 500;
            err.message = ex;
            next(err)
        }
    }


    async deleteUser(req, res, next) {
        try {
            const userService = new UserService();
            await userService.deleteUser(req.params.id);
            if (resultItems.affectedRows > 0)
                res.status(200).json(req.params.id);//מה??
            // res.status(200).json({ status: 200, data: req.params.id });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    async updateUser(req, res, next) {
        try {
            const userService = new UserService();
            await userService.updateUser(req.body, req.params.id);
            if (resultItems.affectedRows > 0)
                res.status(200).json({ status: 200, data: req.params.id });
            const err = {}
            err.statusCode = 404;
            err.message = "user not found";
            next(err)
        }
        catch (ex) {
            const err = {}
            err.statusCode = ex.errno == 1054 ? 400 : 500;
            err.message = ex;
            next(err)
        }
    }

    async updatePassword(req, res, next) {
        try {
            const userService = new UserService();
            const resultItem = await userService.updatePassword(req.body);
            if (resultPassword.affectedRows == 1)
                res.status(200).json(resultItem.changedRows);
            const err = {}
            err.statusCode = 404;
            err.message = "user not found";
            next(err)
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }
}