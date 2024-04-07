import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AppContext } from "../App";

function RegisterDetails({ userIdentifyDetails }) {

    const { setUserDetails } = useContext(AppContext)
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();

    function onSubmitFullDetails(data) {
        const { name, email, phone } = data;
        let newUser = { name: name, username: userIdentifyDetails.current.username, email: email, phone: phone }
        fetch('http://localhost:8080/users', {
            method: 'POST',
            body: JSON.stringify({ ...newUser, password: userIdentifyDetails.current.password }),
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        }).then(response => {
            if (!response.ok)
                throw 'Error' + response.status + ': ' + response.statusText;
            return response.json();
        }).then(createdId => {
            newUser = { ...newUser, id: createdId }
            localStorage.setItem('currentUser', JSON.stringify(newUser));
            setUserDetails(newUser)
            alert("user successfully added");
            navigate(`/home/users/${newUser.id}`);
        }).catch((ex) => alert(ex));
    }

    return (
        <form onSubmit={handleSubmit(onSubmitFullDetails)}>
            <label htmlFor='name'>name</label>
            <input name='name' type='text' required {...register('name')} ></input>

            <label htmlFor='email' >email</label>
            <input name='email' type='email' required {...register('email')} ></input>

            <label htmlFor='phone' >phone</label>
            <input name='phone' type='text' pattern="[0-9\-\+\s]{7,14}" required {...register('phone')}></input>

            <button type='submit'>register</button>
        </form>)
}

export default RegisterDetails;
