
// function checkUserPasswordQuery() {
//     const query = `SELECT * FROM leafeiginodedb.passwords P NATURAL JOIN
//     users U WHERE U.username = ? AND P.password = ? AND isActive = 1`;
//     // const query = `SELECT * FROM users WHERE EXISTS
//     // (SELECT * FROM leafeiginodedb.passwords WHERE username = ? AND password = ?)`;
//     return query
// }

function getUserQuery() {
    const query = `SELECT * FROM users WHERE isActive = 1`;
    return query
}

function getUserByIdQuery() {
    const query = `SELECT * FROM users WHERE id = ? AND isActive = 1`;
    return query
}

function getUserByUsernameQuery() {
    const query = `SELECT * FROM users WHERE username = ?`;
    return query
}

function addUserQuery() {
    // const kk=`SELECT * FROM users WHERE id = ? AND isActive = 1`;
    // if()
    const 
    const query = `INSERT INTO leafeiginodedb.passwords VALUES (? , ?); INSERT INTO leafeiginodedb.users VALUES (null ,? ,? ,? ,?, 1); `;
    //צריך לבדוק עם הוא קיים ופעיל/ לא פעיל (ואז להפוך לפעיל)
    //וצריך גם להכניס סיסמא
    return query
}

function deleteUserQuery() {
    const query = `UPDATE users SET isActive = 0 WHERE id = ?`;
    // const query = `DELETE FROM users WHERE id = ?`;
    return query
}

function updateUserQuery() {
    const query = `UPDATE users SET name=?, username=?, email=?, phone=?, isActive=? WHERE id = ?`;
    return query
}
// checkUserPasswordQuery
export {
    getUserQuery, getUserByIdQuery, addUserQuery, deleteUserQuery, updateUserQuery, getUserByUsernameQuery
}