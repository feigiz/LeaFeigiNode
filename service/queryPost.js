
function getPostQuery() {
    const query = `SELECT * FROM leafeiginodedb.posts`;
    return query
}

function getPostByIdQuery() {
    const query = `SELECT * FROM leafeiginodedb.posts where id = ?`;
    return query
}

function getPostByUserIdQuery() {
    const query = `SELECT * FROM leafeiginodedb.todos where userId = ?`;
    return query
}

function addPostQuery() {
    const query = `INSERT INTO leafeiginodedb.posts VALUES (null ,? ,? ,? )`;
    return query
}

function deletePostQuery() {
    const query = `DELETE FROM leafeiginodedb.posts where id = ?`;
    return query
}

function updatePostQuery() {
    const query = `UPDATE leafeiginodedb.posts SET title=?, body=?, userId=? where id = ?`;
    return query
}

export {
    getPostQuery, getPostByIdQuery, addPostQuery, deletePostQuery, updatePostQuery, getPostByUserIdQuery
}