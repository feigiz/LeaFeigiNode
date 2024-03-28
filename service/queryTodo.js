
function getTodoQuery() {
    const query = `SELECT * FROM leafeiginodedb.todos WHERE isActive = 1`;
    return query
}

function getTodoByIdQuery() {
    const query = `SELECT * FROM leafeiginodedb.todos where id = ? AND isActive = 1`;
    return query
}

function addTodoQuery(newTodo) {
    // const query = `INSERT INTO leafeiginodedb.todos VALUES (${newTodo.id, newTodo.name, newTodo.todoname, newTodo.email, newTodo.phone})`;
    // const query = `INSERT INTO leafeiginodedb.todos VALUES (5, 'Lea salikov','leasali','leasali@gmail.com','0583270933',true)`;
    //צריך לבדוק עם הוא קיים ופעיל/ לא פעיל (ואז להפוך לפעיל)
    //וצריך גם שיכניס סיסמא
    return query
}

function deleteTodoQuery() {
    const query = `UPDATE leafeiginodedb.todos SET isActive = 0 where id = ?`;
    // const query = `DELETE FROM leafeiginodedb.todos where id = ?`;
    return query
}

function updeteTodoQuery(todo) {
    const query = `UPDATE ${todo} FROM leafeiginodedb.todos where id = ?`;
    return query
}

export {
    getTodoQuery, getTodoByIdQuery, addTodoQuery, deleteTodoQuery, updeteTodoQuery
}