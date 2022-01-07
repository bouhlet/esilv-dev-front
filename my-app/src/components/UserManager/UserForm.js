import {useState} from "react";

function UserForm({ onSubmit }){
    const[name, setName] = useState("");

    function handleChange(event){
        setName(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        onSubmit(name);
        setName("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={handleChange}/>
            <input type={"submit"} value="add" />
        </form>
    )
}

export default UserForm