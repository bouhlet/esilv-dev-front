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
    function handleAddItem()
    {
        const id = Date.now();
        setData([...data,{
            id: id,
            title: "todo" + id,
            completed: false,
            },
        ]);
    }
    function handleDeleteItem(item)
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
    return (
    <>
        <button onClick={handleAddItem}>Add item</button>
        <ul>
            {data.map((item) =>(
                <li key={item.id}>{item.title}
                <button onClick={() => handleDeleteItem(item)}>Delete</button>
                </li>
            ))}
        </ul>
    </>)
}

export default TodoList;