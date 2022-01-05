import logo from "./logo.svg";
import "./App.css";
import Button from "./components/lib/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button
          variant="round"
          title="Button 1"
          style={{ color: "red", backgroundColor: "blue" }}
          onClick={function handleClick() 
            {alert("6")}}
        />
        <Button
          variant="squared"
          title="Button 2"
          style={{ color: "green", backgroundColor: "yellow" }}
          onClick={function handleClick() 
            {alert("7")}}
        />
        <Button
          variant="rounded"
          title="Button 3"
          style={{ color: "blue", backgroundColor: "green" }}
          onClick={function handleClick() 
            {alert("8")}}
        />
        <Button
          title="Button 4"
          style={{ color: "red", backgroundColor: "green" }}
          onClick={function handleClick() 
            {alert("9")}}
        />
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
