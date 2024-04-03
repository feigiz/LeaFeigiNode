import { UserService } from '../service/userService.js'

export class UserController {
    async getUser(req, res, next) {
        try {
            const userService = new UserService();
            const resultItems =req.query.username ? await userService.getUserByUsername(req.query.username) :await userService.getUser();
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
            res.status(200).json(resultItem);
            // res.status(200).json({ status: 200, data: resultItem });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    // async checkUserPassword(req, res, next) {
    //     try {
    //         const userService = new UserService();
    //         const resultItem = await userService.checkUserPassword(req.params.username, req.body.password);
    //         res.status(200).json(resultItem);
    //         // res.status(200).json({ status: 200, data: resultItem });
    //     }
    //     catch (ex) {
    //         const err = {}
    //         err.statusCode = 500;
    //         err.message = ex;
    //         next(err)
    //     }
    // }

    async addUser(req, res, next) {
        try {
            const userService = new UserService();
            const resultItem = await userService.addUser(req.body);
            // res.status(200).json({ id: resultItem.insertId });
            res.status(200).json(resultItem.insertId);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }


    async deleteUser(req, res, next) {
        try {
            const userService = new UserService();
            await userService.deleteUser(req.params.id);
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