import "./App.css";
import Wrapper from "./components/Wrapper";
import Button from "./components/Button";
import TomatoButton from "./components/TomatoButton";
import CustomButton from "./components/CustomButton";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Button>Normal Button</Button>
        <Button as="a" href="#">
          Link with Button styles
        </Button>
        <TomatoButton as="a" href="#">
          Link with Tomato Button styles
        </TomatoButton>
        <Button as={CustomButton}>
          Custom Button with Normal Button styles
        </Button>
      </Wrapper>
    </div>
  );
}

export default App;
