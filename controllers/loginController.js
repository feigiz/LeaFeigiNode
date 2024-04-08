import { LoginService } from '../service/loginService.js'

export class LoginController {
    async checkUserPassword(req, res, next) {
        try {
            const loginService = new LoginService();
            const resultItem = await loginService.checkUserPassword(req.body.username, req.body.password);
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
    async changePassword(req, res, next) {
        try {
            const loginService = new LoginService();
            const resultItem = await loginService.changePassword(req.body);
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
}