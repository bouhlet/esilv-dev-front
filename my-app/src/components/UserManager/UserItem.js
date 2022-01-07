import {useState} from "react";

function UserItem({user, onDelete}){
    const[editMode, setEditMode] = useState(false);
    function handleEditMode(){  
        setEditMode(!editMode);
    }
    return <li onClick={handleEditMode}>
        {user.name}
    <button onClick={() => onDelete(user)}>Delete</button></li>;
}

export default UserItem;