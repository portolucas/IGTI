import "./App.css";
import Wrapper from "./components/Wrapper";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Input defaultValue="Without props" type="text" />
        <Input defaultValue="With props" type="text" inputColor="rebeccapurple" />
      </Wrapper>
    </div>
  );
}

export default App;
