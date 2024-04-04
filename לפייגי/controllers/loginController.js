import { Service } from '../service/service.js'
export class LoginController {

    async login(req, res, next) {
        try {
            if (req.body) {
                const loginService = new Service();
                const hashLogin = req.body.password;
                const userLogin = { username: req.body.username, password: hashLogin }
                const resultItems = await loginService.getByParams('passwords', userLogin);
                if (resultItems) {
                    const resultItemsUser = await loginService.getByParams('users', { username: resultItems[0].username })
                    return res.status(200).json({ username: resultItems[0].username, id: resultItemsUser[0].id });
                }
            }
        }
        catch (ex) {
            console.log("err in login")
            const err = {};
            err.statusCode = 400;
            err.message = ex;
            next(err);
        }
    }
}