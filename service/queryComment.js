
function getCommentQuery(queryparams) {
    const fields = Object.keys(queryparams).filter(param => {
        return param == 'id' || param == 'name' || param == 'email' || param == 'body' || param == 'postId';
    });
    let conditions = "WHERE "
    fields.forEach(field => conditions += field + " = '" + queryparams[field] + "' AND ")
    const query = `SELECT * FROM comments ${fields.length > 0 ? conditions.substring(0, conditions.length - 5) : ""}
     ${queryparams._sort ? "ORDER BY " + queryparams._sort : ""}
      ${queryparams._limit ? "LIMIT " + queryparams._limit : ""}`
    console.log(query)
    return query
}

function getCommentByIdQuery() {
    const query = `SELECT * FROM comments WHERE id = ?`;
    return query
}

function addCommentQuery() {
    const query = `INSERT INTO comments (id, ${keys.map(key => key)}) VALUES (null ,? ,? ,? ,? )`;
    return query
}

function deleteCommentQuery() {
    const query = `DELETE FROM comments WHERE id = ?`;
    return query
}

function updateCommentQuery(keys) {
let params=keys.map(key => "," + key + "= ?").slice(0,-1)
console.log(params)
    const query = `UPDATE comments SET ${keys.map(key => "," + key + "= ?")} WHERE id = ?`;
    return query
}

export {
    getCommentQuery, getCommentByIdQuery, addCommentQuery, deleteCommentQuery, updateCommentQuery
}