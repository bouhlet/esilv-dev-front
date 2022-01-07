import {useState, useEffect} from "react";
import UserItem from "./UserItem"
import UserForm from "./UserForm"
function UserList(){

    const [users, setUsers] = useState();

    function handleDeleteItem(user)//delete => filter
    {
        fetch("http://localhost:3001/users/" + user.id, {
            method: "DELETE",
        }).then((response) => {
            if(response.status === 404){
                alert("User not found");
            } else {
                alert("User " + user.id + " successfully deleted");
                setUsers(users.filter((value) => value.id !== users.id));
            }
        });
    }

    function handleAddUser(name) //add => destructuration
    {
        fetch("http://localhost:3001/users/", {
            method: "POST",
            body: JSON.stringify({name: name}),
            headers: {'Content-Type': 'application/json',
        },
        })
            .then(response => response.json())
            .then((data) => {
                setUsers([...users, data]);
            });
    }

    // useEffect(() =>{
    //     //afterUpdate
    //     return () =>{
    //         //BeforeUpdate after first print
    //     }
    // },[users])

    useEffect(() =>{
        fetch("http://localhost:3001/users")
            .then((response) => response.json())
            .then((data) =>setUsers(data));
    },[]);

    return( <>
        {users === undefined && <span>Loading...</span>}
        {users?.length === 0 && <span>No data.</span>}
        {users && 
            (
            <UserForm onSubmit={handleSubmit} />
            <ul>
                {users.map((user) => (
                    <UserItem user={user} onDelete={handleDeleteItem}/>
                    ))
                }
            </ul>
            )}
    </>)
}

export default UserList;