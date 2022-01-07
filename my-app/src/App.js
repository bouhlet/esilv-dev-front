import logo from "./logo.svg";
import "./App.css";
import Button from "./components/lib/Button";
import Table from "./components/lib/Table";
import Collapse from "./components/lib/Collapse";
import TodoList from "./components/TodoList/TodoList";
import UserList from "./components/UserManager/UserList";
import{useState} from "react";

function App() {

  let [data,setData] = useState([{id: "test", title: "todo", completed: false},{id: "test 2", title: "todo 2", completed: true}]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        {window.location.pathname === "/collapse" && <Collapse />}
        {window.location.pathname === "/users" && <UserList />}
        <Button
          onClick={function handleClick() {
            alert("5");
          }}
          title="Button 1"
          style={{ color: "red", backgroundColor: "blue" }}
        />
        <Button
          img={logo}
          variant="rounded"
          title="Button 2"
          onClick={function handleClick() {
            alert("6");
          }}
          style={{ color: "red", backgroundColor: "yellow" }}
        />
        <Button
          variant="round"
          img={logo}
          style={{ color: "red", backgroundColor: "green" }}
          onClick={function handleClick() {
            alert("7");
          }}
        />
        <Button
          variant="squared"
          title="Button 4"
          style={{}}
          onClick={function handleClick() {
            alert("8");
          }}
        />
        <Table
          nbLine="5"
          nbColumn="5"
          cellStyle={{color: "purple", fontSize:"medium", margin:"auto"}
          }
          cellComponent={<span>Test</span>}
        />
        <Table
          nbLine="5"
          nbColumn="5"
          cellStyle={{color: "purple", fontSize:"medium", margin:"auto"}}
        />



        <TodoList data={data} setData = {setData} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
