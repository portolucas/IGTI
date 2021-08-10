import "./App.css";
import Wrapper from "./components/Wrapper";
import Button from "./components/ButtonWithProps";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Button>Normal</Button>
        <Button primary>Primary</Button>
      </Wrapper>
    </div>
  );
}

export default App;
