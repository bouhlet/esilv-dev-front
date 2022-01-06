/**
 * [
    * {
        * id:1,
        * title:"todo1",
        * completed:false
    * }
    * {
        * id:2,
        * title:"todo1",
        * completed:false
    * }
 * ]
 */

function TodoList({data, setData}) {
    function handleAddItem() //add => destructuration
    {
        const id = Date.now();
        setData([...data,{
            id: id,
            title: "todo" + id,
            completed: false,
            },
        ]);
    }
    function handleDeleteItem(item)//delete => filter
    {
        // console.log(item);
        // for(let value of data){
        //     if(value.id === item.id){
        //         data.splice(data.indexOf(value), 1);
        //     }
        // }
        // setData([...data]);
        setData(data.filter((value) => value.id !== item.id))
    }
    function handleToggleComplete(item)//change value => map
    {
        setData(data.map((value) => {
            if(value.id === item.id){
                return {
                    ...value,
                    completed: !value.completed
                }
            }
            else{
                return value
            }
        }))
    }
    return (
    <>
        <button onClick={handleAddItem}>Add item</button>
        <ul>
            {data.map((item) =>(
                <li key={item.id} style={{opacity: item.completed ? 0.5 : 1}}>
                    <input 
                    type="checkbox" 
                    checked={item.completed} 
                    onClick={() => handleToggleComplete(item)} />
                    {item.title}
                <button onClick={() => handleDeleteItem(item)}>Delete</button>
                </li>
            ))}
        </ul>
    </>)
}

export default TodoList;