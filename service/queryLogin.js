function checkUserPasswordQuery() {
    const query = `SELECT id, name, username, email, phone FROM passwords P NATURAL JOIN
    users U WHERE U.username = ? AND P.password = ? AND isActive = 1`;
    return query
}

export { checkUserPasswordQuery }