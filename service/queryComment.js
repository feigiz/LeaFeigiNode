
function getCommentQuery(queryparams) {
    const fields = Object.keys(queryparams).filter(param => {
        return param == 'id' || param == 'name' || param == 'email' || param == 'body' || param == 'postId';
    });
    console.log(fields)
    let conditions = "WHERE "
    fields.forEach(field => conditions += field + " = '" + queryparams[field] + "' AND ")
    console.log(conditions)
    const query = `SELECT * FROM comments ${fields.length > 0 ? conditions.substring(0, conditions.length - 5) : ""} ${queryparams._sort ? "ORDER BY " + queryparams._sort : ""} ${queryparams._limit ? "LIMIT " + queryparams._limit : ""}`
    console.log(query)
    return query
}

function getCommentByIdQuery() {
    const query = `SELECT * FROM comments WHERE id = ?`;
    return query
}

function getCommentByPostIdQuery() {
    const query = `SELECT * FROM comments WHERE postId = ?`;
    return query
}

function addCommentQuery() {
    const query = `INSERT INTO comments VALUES (null ,? ,? ,? ,? )`;
    return query
}

function deleteCommentQuery() {
    // const query = `UPDATE comments SET isActive = 0 WHERE id = ?`;
    const query = `DELETE FROM comments WHERE id = ?`;
    return query
}

function updateCommentQuery() {
    const query = `UPDATE comments SET name=?, email=?, body=?, postId=? WHERE id = ?`;
    return query
}

export {
    getCommentQuery, getCommentByIdQuery, addCommentQuery, deleteCommentQuery, updateCommentQuery, getCommentByPostIdQuery
}