
function getPostQuery(queryparams) {
    const fields = Object.keys(queryparams).filter(param => {
        return param == 'id' || param == 'title' || param == 'body' || param == 'userId';
    });
    console.log(fields)
    let conditions = "WHERE "
    fields.forEach(field => conditions += field + " = " + queryparams[field] + " AND ")
    console.log(conditions)
    const query = `SELECT * FROM posts ${fields.length > 0 ? conditions.substring(0, conditions.length - 5) : ""} ${queryparams._sort ? "ORDER BY " + queryparams._sort : ""} ${queryparams._limit ? "LIMIT " + queryparams._limit : ""}`
    console.log(query)
    return query
}

function getPostByIdQuery() {
    const query = `SELECT * FROM posts WHERE id = ?`;
    return query
}

function getPostByUserIdQuery() {
    const query = `SELECT * FROM posts WHERE userId = ?`;
    return query
}

function addPostQuery() {
    const query = `INSERT INTO posts VALUES (null ,? ,? ,? )`;
    return query
}

function deletePostQuery() {
    const query = `DELETE FROM posts WHERE id = ?`;
    return query
}

function updatePostQuery() {
    const query = `UPDATE posts SET title=?, body=?, userId=? WHERE id = ?`;
    return query
}

export {
    getPostQuery, getPostByIdQuery, addPostQuery, deletePostQuery, updatePostQuery, getPostByUserIdQuery
}