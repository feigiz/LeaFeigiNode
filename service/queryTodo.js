
function getTodoQuery() {
    const query = `SELECT * FROM leafeiginodedb.todos`;
    return query
}

function getTodoByIdQuery() {
    const query = `SELECT * FROM leafeiginodedb.todos where id = ?`;
    return query
}

function getTodoByUserIdQuery() {
    const query = `SELECT * FROM leafeiginodedb.todos where userId = ?`;
    return query
}

function addTodoQuery() {
    const query = `INSERT INTO leafeiginodedb.todos VALUES (null ,? ,? ,? )`;
    return query
}

function deleteTodoQuery() {
    const query = `DELETE FROM leafeiginodedb.todos where id = ?`;
    return query
}

function updateTodoQuery() {
    // UPDATE leafeiginodedb.todos SET title="vfv", completed=1 where id = 25;
    const query = `UPDATE leafeiginodedb.todos SET title=?, completed=?, userId=? where id = ?`;
    return query
}

export {
    getTodoQuery, getTodoByIdQuery, addTodoQuery, deleteTodoQuery, updateTodoQuery, getTodoByUserIdQuery
}