
function getCommentQuery() {
    const query = `SELECT * FROM leafeiginodedb.comments`;
    return query
}

function getCommentByIdQuery() {
    const query = `SELECT * FROM leafeiginodedb.comments where id = ?`;
    return query
}

function getCommentByPostIdQuery() {
    const query = `SELECT * FROM leafeiginodedb.comments where postId = ?`;
    return query
}

function addCommentQuery() {
    const query = `INSERT INTO leafeiginodedb.comments VALUES (null ,? ,? ,? ,? )`;
    return query
}

function deleteCommentQuery() {
    // const query = `UPDATE leafeiginodedb.comments SET isActive = 0 where id = ?`;
    const query = `DELETE FROM leafeiginodedb.comments where id = ?`;
    return query
}

function updateCommentQuery() {
    const query = `UPDATE leafeiginodedb.comments SET name=?, email=?, body=?, postId=? where id = ?`;
    return query
}

export {
    getCommentQuery, getCommentByIdQuery, addCommentQuery, deleteCommentQuery, updateCommentQuery, getCommentByPostIdQuery
}