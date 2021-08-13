import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [welcome, setWelcome] = useState("src/App.js");
  const handleClick = () => {
    setWelcome("src/App.test");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>{welcome}</code> and save to reload.
        </p>
        <button onClick={handleClick}>Let's go!</button>
      </header>
    </div>
  );
}

export default App;
