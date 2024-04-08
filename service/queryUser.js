
// function checkUserPasswordQuery() {
//     const query = `SELECT * FROM leafeiginodedb.passwords P NATURAL JOIN
//     users U WHERE U.username = ? AND P.password = ? AND isActive = 1`;
//     // const query = `SELECT * FROM users WHERE EXISTS
//     // (SELECT * FROM leafeiginodedb.passwords WHERE username = ? AND password = ?)`;
//     return query
// }

function getUserQuery(queryparams) {
    const fields = Object.keys(queryparams).filter(param => {
        return param == 'id' || param == 'name' || param == 'username' || param == 'email' || param == 'phone';
    });
    console.log(fields)
    let conditions = ""
    fields.forEach(field => conditions += "AND " + field + " = '" + queryparams[field] + "'")
    console.log(conditions)
    const query = `SELECT * FROM users WHERE isActive = 1 ${fields.length > 0 ? conditions : ""} ${queryparams._sort ? "ORDER BY " + queryparams._sort : ""} ${queryparams._limit ? "LIMIT " + queryparams._limit : ""}`
    console.log(query)
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

function registrationQuery() {
    const query = `INSERT INTO passwords VALUES (?, ?)`;
    return query
}

function addUserQuery() {
    // const kk=`SELECT * FROM users WHERE id = ? AND isActive = 1`;
    // if()
    const query = `INSERT INTO users VALUES (null ,? ,? ,? ,?, 1)`;
    // const query = `INSERT INTO leafeiginodedb.passwords VALUES (? , ?); INSERT INTO leafeiginodedb.users VALUES (null ,? ,? ,? ,?, 1); `;
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
    getUserQuery, getUserByIdQuery, addUserQuery, deleteUserQuery, updateUserQuery, getUserByUsernameQuery, registrationQuery
}