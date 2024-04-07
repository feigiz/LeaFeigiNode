
import { executeQuery } from './db.js';
import { getUserQuery, getUserByIdQuery, addUserQuery, deleteUserQuery, updateUserQuery, getUserByUsernameQuery } from './queryUser.js'
// checkUserPasswordQuery
export class UserService {

    // async checkUserPassword(username, password) {
    //     const queryUser = checkUserPasswordQuery();
    //     const result = await executeQuery(queryUser, [username, password]);
    //     return result;
    // }

    async getUser() {
        const queryUser = getUserQuery();
        const result = await executeQuery(queryUser);
        return result;
    }

    async getUserById(id) {
        const queryUser = getUserByIdQuery();
        const result = await executeQuery(queryUser, [id]);
        return result;
    }

    async getUserByUsername(username) {
        const queryUser = getUserByUsernameQuery();
        const result = await executeQuery(queryUser, [username]);
        return result;
    }

    async addUser(newUser) {
        const queryUser = addUserQuery();
        let params = Object.values(newUser)
        params.splice(4, 0, params[1]);//יש דרך יותר נורמלית?
        console.log(params);
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
        const queryUser = updateUserQuery();
        await executeQuery(queryUser, data);
    }

}