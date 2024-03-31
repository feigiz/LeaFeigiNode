
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

function addPostQuery(newPost) {
    // const query = `INSERT INTO leafeiginodedb.posts VALUES (${newPost.id, newPost.name, newPost.postname, newPost.email, newPost.phone})`;
    // const query = `INSERT INTO leafeiginodedb.posts VALUES (5, 'Lea salikov','leasali','leasali@gmail.com','0583270933',true)`;
    //צריך לבדוק עם הוא קיים ופעיל/ לא פעיל (ואז להפוך לפעיל)
    //וצריך גם שיכניס סיסמא
    return query
}

function deletePostQuery() {
    const query = `DELETE FROM leafeiginodedb.posts where id = ?`;
    return query
}

function updetePostQuery(post) {
    const query = `UPDATE ${post} FROM leafeiginodedb.posts where id = ?`;
    return query
}

export {
    getPostQuery, getPostByIdQuery, addPostQuery, deletePostQuery, updetePostQuery, getPostByUserIdQuery
}