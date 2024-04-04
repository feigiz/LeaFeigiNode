
function getAllQuery(tableName) {
    const query = `SELECT * FROM ${process.env.DB_NAME}.${tableName} `;
    return query
}

function getByIdQuery(tableName) {
    const query = `SELECT * FROM ${process.env.DB_NAME}.${tableName}  where id = ?`;
    return query
}

function getByParamsQuery(tableName, queries) {

    const params = createGenericParamsForGet(tableName, queries)
    const query = `SELECT * FROM ${process.env.DB_NAME}.${tableName}  where  ${params} `;
    return query
}

function createGenericParamsForGet(tableName, queries) {
    let paramsString = ''
    Object.keys(queries).map(key => paramsString += `${key} = ? and `)
    tableName == 'users' ? paramsString += 'isActive = 1' : paramsString = paramsString.slice(0, - 4)
    return paramsString
}

function addItemQuery(tableName, newItem) {
    const params = createGenericQueryForAdd(newItem)
    const query = `INSERT INTO ${process.env.DB_NAME}.${tableName} ${params}`
    console.log(query)
    return query
}

function updateItemQuery(tableName, newItem) {
    const params = createGenericQueryForUpdate(newItem)
    console.log(params)
    const query = `UPDATE ${process.env.DB_NAME}.${tableName} SET ${params} WHERE id = ?`
    console.log(query)
    return query
}

function deleteItemQuery(tableName) {
    const query = `DELETE FROM ${process.env.DB_NAME}.${tableName}  where id = ?`;
    return query
}

function createGenericQueryForUpdate(newItem) {
    let keyString = ''
    Object.keys(newItem).map(key => keyString += `${key} = ?,`)
    keyString = keyString.slice(0, - 1)
    console.log(keyString);
    return keyString
}

function createGenericQueryForAdd(newItem) {
    let keyString = '('
    let questionMarks = '('
    Object.keys(newItem).map(key => { keyString += `${key}, `; questionMarks += "?, " })
    keyString = keyString.slice(0, keyString.length - 2)
    questionMarks = questionMarks.slice(0, questionMarks.length - 2)
    keyString += `) VALUES`
    keyString += questionMarks
    keyString += ')'
    console.log(keyString);
    return keyString
}


function setPwd() {
    const query = `SELECT userId FROM ${process.env.DB_NAME}.passwords  where id = ? && password = ?`;
    return query
}

// function getPwd(){
//     const query = `INSERT INTO ${process.env.DB_NAME}.passwords ("userId" ,"password") VALUES (?, ?)`;
//     return query
// }

export {
    getAllQuery, getByIdQuery, addItemQuery, updateItemQuery, deleteItemQuery, getByParamsQuery
}