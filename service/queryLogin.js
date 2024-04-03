function checkUserPasswordQuery() {
    const query = `SELECT * FROM leafeiginodedb.passwords P NATURAL JOIN
    leafeiginodedb.users U WHERE U.username = ? AND P.password = ? AND isActive = 1`;
    // const query = `SELECT * FROM leafeiginodedb.users WHERE EXISTS
    // (SELECT * FROM leafeiginodedb.passwords WHERE username = ? AND password = ?)`;
    return query
}

export { checkUserPasswordQuery }