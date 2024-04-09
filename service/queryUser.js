function getUserQuery(queryparams) {
    const fields = Object.keys(queryparams).filter(param => {
        return param == 'id' || param == 'name' || param == 'username' || param == 'email' || param == 'phone';
    });
    let conditions = ""
    fields.forEach(field => conditions += "AND " + field + " = '" + queryparams[field] + "'")
    const query = `SELECT * FROM users WHERE isActive = 1 ${fields.length > 0 ? conditions : ""}
     ${queryparams._sort ? "ORDER BY " + queryparams._sort : ""}
      ${queryparams._limit ? "LIMIT " + queryparams._limit : ""}`
    console.log(query)
    return query
}

function getUserByIdQuery() {
    const query = `SELECT * FROM users WHERE id = ? AND isActive = 1`;
    return query
}

function registrationQuery() {
    const query = `INSERT INTO passwords VALUES (?, ?)`;
    return query
}

// function checkIfUserExistQuery() {
//     const query = `SELECT * FROM users WHERE username = ? AND isActive = 0`;
//     return query
// }

// function makeUserActiveQuery() {
//     const query = `UPDATE users SET isActive = 1 WHERE username = ?`;
//     return query
// }

function addUserQuery() {
    const query = `INSERT INTO users VALUES (null ,? ,? ,? ,?, 1)`;
    return query
}

function deleteUserQuery() {
    const query = `UPDATE users SET isActive = 0 WHERE id = ?`;
    return query
}

function updateUserQuery(keys) {
    const query = `UPDATE users SET ${keys.map(key => key + "= ?")} WHERE id = ?`;
    return query
}

function updatePasswordQuery() {
    const query = `UPDATE passwords SET password=? WHERE username=? and password=?`;
    return query
}

export {
    getUserQuery, getUserByIdQuery, addUserQuery, deleteUserQuery, updateUserQuery, registrationQuery, updatePasswordQuery
    //  ,checkIfUserExistQuery,makeUserActiveQuery
}