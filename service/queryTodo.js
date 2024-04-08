
function getTodoQuery(queryparams) {
    const fields = Object.keys(queryparams).filter(param => {
        return param == 'id' || param == 'title' || param == 'userId' || param == 'completed';
    });
    console.log(fields)
    let conditions = "WHERE "
    fields.forEach(field => conditions += field + " = " + queryparams[field] + " AND ")
    console.log(conditions)
    const query = `SELECT * FROM todos ${fields.length > 0 ? conditions.substring(0, conditions.length - 5) : ""} ${queryparams._sort ? "ORDER BY " + queryparams._sort : ""} ${queryparams._limit ? "LIMIT " + queryparams._limit : ""}`
    console.log(query)
    return query
}

function getTodoByIdQuery() {
    const query = `SELECT * FROM todos WHERE id = ?`;
    return query
}

function getTodoByUserIdQuery() {
    const query = `SELECT * FROM todos WHERE userId = ?`;
    return query
}

function addTodoQuery() {
    const query = `INSERT INTO todos VALUES (null ,? ,? ,? )`;
    return query
}

function deleteTodoQuery() {
    const query = `DELETE FROM todos WHERE id = ?`;
    return query
}

function updateTodoQuery() {
    // UPDATE todos SET title="vfv", completed=1 WHERE id = 25;
    const query = `UPDATE todos SET title=?, completed=?, userId=? WHERE id = ?`;
    return query
}

export {
    getTodoQuery, getTodoByIdQuery, addTodoQuery, deleteTodoQuery, updateTodoQuery, getTodoByUserIdQuery
}