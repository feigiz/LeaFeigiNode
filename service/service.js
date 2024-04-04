
import { executeQuery } from './db.js';
import { getQuery, getByIdQuery, addQuery, deleteQuery, updateQuery, getByParamQuery } from './query.js'

export class Service {
    async get(tableName) {
        const query = getQuery(tableName);
        const result = await executeQuery(query);
        return result;
    }

    async getById(id, tableName) {
        const query = getByIdQuery(tableName);
        const result = await executeQuery(query, [id]);
        return result;
    }

    async getByParam(id, tableName, param) {
        const query = getByParamQuery(tableName, param);
        const result = await executeQuery(query, [id]);
        return result;
    }

    async add(newItem, tableName) {
        const query = addQuery(tableName);
        const result = await executeQuery(query, Object.values(newItem));
        return result;
    }

    async delete(id, tableName) {
        const query = deleteQuery(tableName);
        await executeQuery(query, [id]);
    }

    async update(updated, id, tableName) {
        let data = Object.values(updated);
        data.push(id)
        const query = updateQuery(tableName);
        await executeQuery(query, data);
    }
}