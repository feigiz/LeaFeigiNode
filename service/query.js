
function getQuery(tableName) {
    const query = `SELECT * FROM ${tableName}`;
    return query
}

function getByIdQuery(tableName) {
    const query = `SELECT * FROM ${tableName} WHERE id = ?`;
    return query
}

function getByParamQuery(tableName,param) {
    const query = `SELECT * FROM ${tableName} WHERE ${param} = ?`;
    return query
}

function addQuery(tableName) {
    const query = `INSERT INTO ${tableName} VALUES (null ,? ,? ,? )`;
    return query
}

function deleteQuery(tableName) {
    const query = `DELETE FROM ${tableName} WHERE id = ?`;
    return query
}

function updateQuery(tableName) {
    // UPDATE ${tableName} SET title="vfv", completed=1 WHERE id = 25;
    const query = `UPDATE ${tableName} SET title=?, completed=?, userId=? WHERE id = ?`;
    return query
}

export {
    getQuery, getByIdQuery, addQuery, deleteQuery, updateQuery, getByParamQuery
}