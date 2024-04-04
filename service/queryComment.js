
function getCommentQuery() {
    const query = `SELECT * FROM comments`;
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