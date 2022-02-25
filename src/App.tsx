import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import PlayerModal from "./Components/PlayerModal";
import PlayerSelect from "./Components/PlayerSelect";
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
  const isMounted = useRef(false);
  const [playerModal, setPlayerModal] = useState("");
  const [buttonReset, setButtonReset] = useState(false);
  const [firstPlayer, setFirstPlayer] = useState(true);
  const handleResetClick = (e: React.SyntheticEvent) => {
    setButtonReset(true);
  };

  // Handle player modal on player change
  useEffect(() => {
    isMounted.current = true;
    const timeout = setTimeout(() => {
      if (isMounted.current === true) {
        setPlayerModal("");
      }
    }, 1500);
    return () => {
      isMounted.current = false;
      clearTimeout(timeout);
    };
  }, [playerModal]);

  return (
    <Container className="App">
      <Header />
      <PlayerSelect firstPlayer={firstPlayer} setFirstPlayer={setFirstPlayer} />
      <Dashboard
        firstPlayer={firstPlayer}
        setPlayerModal={setPlayerModal}
        buttonReset={buttonReset}
        setButtonReset={setButtonReset}
      />
      <Button onClick={handleResetClick}>Reset</Button>
      {playerModal !== "" && <PlayerModal player={playerModal} />}
    </Container>
  );
}

export default App;
