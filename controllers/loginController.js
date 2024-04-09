
import { LoginService } from '../service/loginService.js'

export class LoginController {
    async checkUserPassword(req, res, next) {
        try {
            const loginService = new LoginService();
            const resultItem = await loginService.checkUserPassword(req.body.username, req.body.password);
            res.status(200).json(resultItem);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }
}
























//             if(resultItem.length==0)
//             throw new Error('Not found');

        // catch (ex) {
        //     const err = {}
        //     switch (ex.message) {
        //         case "Not found":
        //             err.statusCode = 404;
        //             break;
        //         case "Element already exists":
        //             err.statusCode = 409;
        //             break;
        //         default:
        //             err.statusCode = 500;
        //             break;
        //     }
        //     err.message = ex.message;
        //     next(err)
        // }