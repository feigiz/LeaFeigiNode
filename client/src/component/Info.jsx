import React, { useContext } from "react";
import { AppContext } from "../App";

function Info() {
    const { userDetails } = useContext(AppContext)
    const [showPasswordChangingForm, setShowPasswordChangingForm] = useState(false);

    function updatePassword(event) {
        event.preventDefault()
        const { oldPassword, newPassword } = event.target;
        fetch(`http://localhost:8080/login`, {
            method: 'PUT',
            body: JSON.stringify({ oldPassword:oldPassword, newPassword:newPassword }),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
        }).then(response => {
            if (!response.ok)
                throw 'Error' + response.status + ': ' + response.statusText;
        }).then(() => {
            setOriginalTodos(prev => [...prev.slice(0, originalIndex), { ...prev[originalIndex], ...updatedTodo }, ...prev.slice(originalIndex + 1, prev.length)])
            setTodos(prev => [...prev.slice(0, i), { ...prev[i], ...updatedTodo }, ...prev.slice(i + 1, prev.length)])
            changeEditable(i)
            setShowPasswordChangingForm(false)
        }).catch((ex) => alert(ex));
    }

    const print = (detail) => {
        return Object.keys(detail).map((key) => (typeof detail[key] === 'object' ?
            <div key={key} >
                <br />
                <h3><ins>{key + ":"}</ins></h3>
                {print(detail[key])}
            </div>
            :
            <p key={key}><b>{key}:</b> {detail[key]}</p>
        ))
    }

    return (<>
        {print(userDetails)}
    <button onClick={setShowPasswordChangingForm(prev => !prev)}>Change password</button>
    {showPasswordChangingForm && <form onSubmit={updatePassword}>
            <label htmlFor='oldPassword' >old password</label>
            <input name='oldPassword' type='text' required></input>
            <label htmlFor='newPassword' >new password</label>
            <input name='newPassword' type='text' required></input>
            <button type="submit">update</button>
        </form>}     
    </>);
}

export default Info;