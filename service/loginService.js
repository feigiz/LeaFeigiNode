
import { executeQuery } from './db.js';
import { checkUserPasswordQuery } from './queryLogin.js'

export class LoginService {
    async checkUserPassword(username, password) {
        const queryLogin = checkUserPasswordQuery();
        const result = await executeQuery(queryLogin, [username, password]);
        return result;
    }
    async changePassword(username, password) {
        const queryLogin = checkUserPasswordQuery();
        const result = await executeQuery(queryLogin, [username, password]);
        return result;
    }
}