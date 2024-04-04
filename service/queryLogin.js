function checkUserPasswordQuery() {
    const query = `SELECT id, name, username, email, phone FROM passwords P NATURAL JOIN
    users U WHERE U.username = ? AND P.password = ? AND isActive = 1`;
    // const query = `SELECT * FROM users WHERE EXISTS
    // (SELECT * FROM passwords WHERE username = ? AND password = ?)`;
    return query
}

export { checkUserPasswordQuery }