import { useState } from 'react';
import jwtDecode from "jwt-decode";

function Login(){
    const[values, setValues] = useState({username:"", password:""});

    const[user,setUser] = useState(localStorage.getItem('token'));

    function handleChange(name){ //VanillaJS approach (Closure)
    return function (e){
        setValues({...values, [name] : e.target.value});
    }
}

    function handleSubmit(e){
        e.preventDefault();
        const URL = ""; // https://fauques.freeboxos.fr:3000/login
        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        })
            .then(response =>response.json())
            .then(data => {
                localStorage.setItem("token", data.token);
                setUser(data.token);
                console.log(jwtDecode(data.token))
            });
    }

    return user ?  <span>Already logged in</span> : (
    <form onSubmit={handleSubmit}>
        <input value={values.username} onChange={handleChange("username")} />
        <input value={values.password} onChange={handleChange("password")} />
        <input type="submit" value="Login" />
    </form>)
}

export default Login;