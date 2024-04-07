
function getQuery(tableName) {
    const query = `SELECT * FROM ${tableName}`;
    return query
}

function getByIdQuery(tableName) {
    const query = `SELECT * FROM ${tableName} WHERE id = ?`;
    return query
}

function getByParamQuery(tableName, param) {
    const query = `SELECT * FROM ${tableName} WHERE ${param} = ?`;
    return query
}

function addQuery(tableName) {//is it normal
    const query = `INSERT INTO ${tableName} VALUES (null ,? ,? ,? ${tableName == "comments" && ",?"})`;
    return query
}

function deleteQuery(tableName) {
    const query = `DELETE FROM ${tableName} WHERE id = ?`;
    return query
}

function updateQuery(tableName) {//is it normal
    let query;
    switch (tableName) {
        case "todos":
            query = `UPDATE ${tableName} SET title=?, completed=?, userId=? WHERE id = ?`;
            break;
        case "posts":
            query = `UPDATE ${tableName} SET title=?, completed=?, userId=? WHERE id = ?`;
            break;
        case "comments":
            query = `UPDATE ${tableName} SET title=?, completed=?, userId=? WHERE id = ?`;
            break;
        default:
            break;
    }
    return query
}

export {
    getQuery, getByIdQuery, addQuery, deleteQuery, updateQuery, getByParamQuery
}