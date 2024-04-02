
import { executeQuery } from './db.js';
import { getUserQuery, getUserByIdQuery, addUserQuery, deleteUserQuery, updateUserQuery, checkUserPasswordQuery } from './queryUser.js'

export class UserService {

    async checkUserPassword(username, password) {
        const queryUser = checkUserPasswordQuery();
        const result = await executeQuery(queryUser, [username, password]);
        console.log(result);
        return result;
    }

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

    //למה שליחת הפרמטרים שונה?
    async addUser(newUser) {
        const queryUser = addUserQuery();
        await executeQuery(queryUser);
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