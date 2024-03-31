
function checkUserPasswordQuery() {
    console.log(username, password)
    // const query = `SELECT * FROM leafeiginodedb.users WHERE isActive = 1`;
    // return query
}

function getUserQuery() {
    const query = `SELECT * FROM leafeiginodedb.users WHERE isActive = 1`;
    return query
}

function getUserByIdQuery() {
    const query = `SELECT * FROM leafeiginodedb.users where id = ? AND isActive = 1`;
    return query
}

function addUserQuery(newUser) {
    // const query = `INSERT INTO leafeiginodedb.users VALUES (${newUser.id, newUser.name, newUser.username, newUser.email, newUser.phone})`;
    // const query = `INSERT INTO leafeiginodedb.users VALUES (5, 'Lea salikov','leasali','leasali@gmail.com','0583270933',true)`;
    //צריך לבדוק עם הוא קיים ופעיל/ לא פעיל (ואז להפוך לפעיל)
    //וצריך גם שיכניס סיסמא
    return query
}

function deleteUserQuery() {
    const query = `UPDATE leafeiginodedb.users SET isActive = 0 where id = ?`;
    // const query = `DELETE FROM leafeiginodedb.users where id = ?`;
    return query
}

function updeteUserQuery(user) {
    const query = `UPDATE ${user} FROM leafeiginodedb.users where id = ?`;
    return query
}

export {
    getUserQuery, getUserByIdQuery, addUserQuery, deleteUserQuery, updeteUserQuery, checkUserPasswordQuery
}