import { Service } from '../service/service.js'


export class UserController {


    async getUsers(req, res, next) {
        try { 
            const userService = new Service();
            const resultItems = req.query.length != 0 ? await userService.getByParams('users', req.query) : await userService.getAll('users')
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
            const userService = new Service()
            const resultItem = await userService.getById('users', req.params.id);
            return res.status(200).json(resultItem[0]);
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
            const userService = new Service();
            const resultItem = await userService.add('users', req.body);
            res.status(200).json({ id: resultItem.insertId });
        }
        catch (ex) {
            const err = {}
            console.log("error add user");
            console.log(ex);
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }


    async deleteUser(req, res, next) {
        try {
            const userService = new Service();
            await userService.delete('users', req.params.id);
            return res.status(200).json({});
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
            const userService = new Service();
            await userService.update('users', req.params.id, req.body);
            res.status(200).json({ id: req.params.id });
        }
        catch (ex) {
            const err = {}
            console.log("error update user");
            console.log(ex);
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }
}