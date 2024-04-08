
import { executeQuery } from './db.js';
import { getUserQuery, getUserByIdQuery, addUserQuery, deleteUserQuery, updateUserQuery, registrationQuery, updatePasswordQuery } from './queryUser.js'

export class UserService {

    async getUser(queryparams) {
        const queryUser = getUserQuery(queryparams);
        const result = await executeQuery(queryUser);
        return result;
    }

    async getUserById(id) {
        const queryUser = getUserByIdQuery();
        const result = await executeQuery(queryUser, [id]);
        return result;
    }

    async addUser(newUser) {
        const queryUser = addUserQuery();
        const queryRegistration = registrationQuery();
        let params = Object.values(newUser)
        let password = [params[1], params.pop()]
        console.log(password);
        await executeQuery(queryRegistration, password);
        const result = await executeQuery(queryUser, params);
        return result;
    }

    async deleteUser(id) {
        const queryUser = deleteUserQuery();
        await executeQuery(queryUser, [id]);
    }

    async updateUser(updatedUser, id) {
        let data = Object.values(updatedUser);
        data.push(id)
        const queryUser = updateUserQuery(Object.keys(updatedUser));
        await executeQuery(queryUser, data);
    }

    async updatePassword(userPasswordDetails) {
        const queryUser = updatePasswordQuery();
        const result = await executeQuery(queryUser, Object.values(userPasswordDetails));
        return result;
    }

}