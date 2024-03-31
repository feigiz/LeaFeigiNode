
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

function addCommentQuery(newComment) {
    // const query = `INSERT INTO leafeiginodedb.comments VALUES (${newComment.id, newComment.name, newComment.commentname, newComment.email, newComment.phone})`;
    // const query = `INSERT INTO leafeiginodedb.comments VALUES (5, 'Lea salikov','leasali','leasali@gmail.com','0583270933',true)`;
    //צריך לבדוק עם הוא קיים ופעיל/ לא פעיל (ואז להפוך לפעיל)
    //וצריך גם שיכניס סיסמא
    return query
}

function deleteCommentQuery() {
    // const query = `UPDATE leafeiginodedb.comments SET isActive = 0 where id = ?`;
    const query = `DELETE FROM leafeiginodedb.comments where id = ?`;
    return query
}

function updeteCommentQuery(comment) {
    const query = `UPDATE ${comment} FROM leafeiginodedb.comments where id = ?`;
    return query
}

export {
    getCommentQuery, getCommentByIdQuery, addCommentQuery, deleteCommentQuery, updeteCommentQuery, getCommentByPostIdQuery
}