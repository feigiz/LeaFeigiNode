
function getTodoQuery() {
    const query = `SELECT * FROM todos`;
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