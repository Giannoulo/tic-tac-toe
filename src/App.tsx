import React, { useState } from "react";
import styled from "styled-components";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import Button from "./Components/StyledComponents/Button";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(105, 48, 195);
  background: linear-gradient(
    180deg,
    rgba(105, 48, 195, 1) 0%,
    rgba(83, 144, 217, 1) 67%,
    rgba(86, 207, 225, 1) 100%
  );
`;
function App() {
  const [buttonReset, setButtonReset] = useState(false);
  const handleResetClick = (e: React.SyntheticEvent) => {
    setButtonReset(true);
  };
  return (
    <Container className="App">
      <Header />
      <Dashboard buttonReset={buttonReset} setButtonReset={setButtonReset} />
      <Button onClick={handleResetClick}>Reset</Button>
    </Container>
  );
}

export default App;
