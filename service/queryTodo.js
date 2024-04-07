
function getTodoQuery(queryparams) {
    // const query = `SELECT * FROM todos ${queryparams._limit&& "LIMIT " queryparams._limit } WHERE id = ? order by name`;
    // var field=Object.keys(queryparams)
    // field
    const fields = Object.keys(queryparams).filter(param => {
        return param == 'id' || param == 'title' || param == 'userId' || param == 'completed';
    });
    console.log(fields)
    let con = "WHERE "
    fields.forEach(field => con += field + " = " + queryparams[field] + " AND ")
    console.log(con)
    const query = `SELECT * FROM todos ${fields.length > 0 && con.substring(0, con.length - 5)} ${queryparams._sort ? "ORDER BY " + queryparams._sort : ""} ${queryparams._limit ? "LIMIT " + queryparams._limit : ""}`
    console.log(query)
    return query
}

function getTodoByIdQuery() {
    const query = `SELECT * FROM todos WHERE id = ?`;
    return query
}

// -- _limit=2
// SELECT * FROM users LIMIT 2;

// -- _sort=name
// SELECT * FROM users order by name;

// -- field=       username="Bret"
// SELECT * FROM users where username="Bret";

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