import { executeQuery } from './db.js';
import { getAllQuery, getByIdQuery, addItemQuery, updateItemQuery, deleteItemQuery, getByParamsQuery } from './queries.js'

export class Service {

    async getAll(tableName) {
        const query = getAllQuery(tableName);
        const result = await executeQuery(query);
        return result;
    }

    async getById(tableName, id) {
        const query = getByIdQuery(tableName);
        const result = await executeQuery(query, [id]);
        return result;
    }

    async getByParams(tableName, params) {
        const query = getByParamsQuery(tableName, params);
        console.log("query")
        console.log(query)
        console.log("Object.values(params)")
        console.log(Object.values(params))
        const result = await executeQuery(query,Object.values(params));
        return result;
    }

    async add(tableName, newUser) {
        const query = addItemQuery(tableName, newUser);
        const result = await executeQuery(query, Object.values(newUser));
        return result;
    }

    async update(tableName, id, newUser) {
        const query = updateItemQuery(tableName, newUser);
        const result = await executeQuery(query, [...Object.values(newUser), id]);
        return result;
    }

    async delete(tableName, id) {
        if (tableName == 'users') {
            console.log(tableName)
            this.update(tableName, id, { "isActive": "0" })
        }
        else {
            const query = deleteItemQuery(tableName);
            const result = await executeQuery(query, [id]);
            return result;
        }
    }
}