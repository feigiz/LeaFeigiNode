
function getTodoQuery(queryparams) {
    const fields = Object.keys(queryparams).filter(param => {
        return param == 'id' || param == 'title' || param == 'userId' || param == 'completed';
    });
    let conditions = "WHERE "
    fields.forEach(field => conditions += field + " = '" + queryparams[field] + "' AND ")
    const query = `SELECT * FROM todos ${fields.length > 0 ? conditions.substring(0, conditions.length - 5) : ""} 
    ${queryparams._sort ? "ORDER BY " + queryparams._sort : ""} 
    ${queryparams._limit ? "LIMIT " + queryparams._limit : ""};`
    console.log(query)
    return query
}

function getTodoByIdQuery() {
    const query = `SELECT * FROM todos WHERE id = ?`;
    return query
}

function addTodoQuery(keys) {
    const query = `INSERT INTO todos(id, ${keys.map(key => key)}) VALUES (null ,? ,? ,? )`;
    console.log(query)
    return query
}

function deleteTodoQuery() {
    const query = `DELETE FROM todos WHERE id = ?`;
    return query
}

function updateTodoQuery() {
    const query = `UPDATE todos SET title=?, completed=?, userId=? WHERE id = ?`;
    return query
}

export {
    getTodoQuery, getTodoByIdQuery, addTodoQuery, deleteTodoQuery, updateTodoQuery
}