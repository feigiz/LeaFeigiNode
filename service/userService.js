
import { executeQuery } from './db.js';
import { getUserQuery ,getUserByIdQuery, addUserQuery, deleteUserQuery, updeteUserQuery} from './queryUser.js'

export class UserService {

    async getUser() {
        const queryUser = getUserQuery();
        const result = await executeQuery(queryUser);
        return result;
    }

    async getUserById(id) {
        const queryUser = getUserByIdQuery();
        const result =  await executeQuery(queryUser, [id]);
        return result;
    }

    async addUser(newUser) {
        const queryUser = addUserQuery(newUser);
        await executeQuery(queryUser);
    }

    async deleteUser(id) {
        const queryUser = deleteUserQuery();
        await executeQuery(queryUser, [id]);
    }

    async updeteUser(id) {
        const queryUser = updeteUserQuery();
        await executeQuery(queryUser, [id]);
    }
    
}