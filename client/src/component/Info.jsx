import React, { useState, useContext } from "react";
import { AppContext } from "../App";

function Info() {
    const { userDetails } = useContext(AppContext)
    const [showPasswordChangingForm, setShowPasswordChangingForm] = useState(false);

    function updatePassword(event) {
        event.preventDefault()
        const { oldPassword, newPassword } = event.target;
        fetch(`http://localhost:8080/users`, {
            method: 'PATCH',
            body: JSON.stringify({ newPassword: newPassword.value, username: userDetails.username, oldPassword: oldPassword.value }),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
        }).then(response => {
            if (!response.ok)
                throw 'Error' + response.status + ': ' + response.statusText;
            return response.json();
        }).then(change => {
            if (change == 0)
                alert("The password does not match :(")
            else
            alert("The password has been updated successfully :)")
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
        <button onClick={() => setShowPasswordChangingForm(prev => !prev)}>Change password</button>
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