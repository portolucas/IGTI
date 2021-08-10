import "./App.css";
import Wrapper from "./components/Wrapper";
import { Link, StyledLink } from "./components/Link";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Link>Unstyled, boring Link</Link>
        <br />
        <StyledLink>Styled, exciting Link</StyledLink>
      </Wrapper>
    </div>
  );
}

export default App;
