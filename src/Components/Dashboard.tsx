import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Tile from "./Tile";

import {getWinner} from "../Utilities/helperHunctions";
import WinnerModal from "./WinnerModal";

const Container = styled.div`
  background-color: #6930c3;
  height: 500px;
  width: 500px;
  color: #000;
  border-radius: 7px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  column-gap: 4px;
  row-gap: 4px;
  border: 6px solid #fff;
  box-sizing: content-box;
`;
const Dashboard = ({
  setPlayerModal,
  buttonReset,
  setButtonReset,
  firstPlayerX,
}: {
  setPlayerModal: React.Dispatch<React.SetStateAction<string>>;
  buttonReset: boolean;
  setButtonReset: React.Dispatch<React.SetStateAction<boolean>>;
  firstPlayerX: boolean;
}) => {
  const [tileJSX, setTileJSX] = useState<JSX.Element[] | null>(null);
  const [tileArray, setTileArray] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [localHydration, setLocalHydration] = useState(false);
  const [gameOver, setGameOver] = useState("");

  // Handle First player change
  useEffect(() => {
    if (firstPlayerX === false && tileArray.every((element) => element === "")) {
      setCurrentPlayer("O");
    }
  }, [firstPlayerX, tileArray]);

  // Open player modal when the player changes
  useEffect(() => {
    setPlayerModal(currentPlayer);
  }, [currentPlayer, setPlayerModal]);

  // Check for saved localStorage items on mount
  useEffect(() => {
    const localTileArray = localStorage.getItem("tileArray");
    const localPlayer = localStorage.getItem("player");
    if (localTileArray && localPlayer) {
      setLocalHydration(true);
      setTileArray(JSON.parse(localTileArray));
      setCurrentPlayer(localPlayer);
    }
  }, []);

  // Reset the tileArray and currentPlayer when the button is pressed.
  useEffect(() => {
    if (buttonReset === true) {
      setButtonReset(false);
      setTileArray(Array(9).fill(""));
      firstPlayerX === true ? setCurrentPlayer("X") : setCurrentPlayer("O");
      localStorage.removeItem("tileArray");
      localStorage.removeItem("player");
      setGameOver("");
    }
  }, [firstPlayerX, buttonReset, setButtonReset, setTileArray]);

  // Update localstorage when tileArray changes and switch players
  useEffect(() => {
    // Update only when the tileArray is not empty and the tileArray doesnt come from localStorage
    if (tileArray.find((element) => element !== "") && !localHydration) {
      setCurrentPlayer((prevPlayer) => {
        if (prevPlayer === "X") {
          return "O";
        } else {
          return "X";
        }
      });
      localStorage.setItem("tileArray", JSON.stringify(tileArray));
    }
  }, [tileArray, localHydration]);

  // Update localStorage Player
  useEffect(() => {
    localStorage.setItem("player", currentPlayer);
  }, [currentPlayer]);

  // Check for winner
  useEffect(() => {
    const winner = getWinner(tileArray);
    if (winner !== "none") {
      setGameOver(winner);
    }
  }, [tileArray]);

  useEffect(() => {
    setTileJSX(
      tileArray.map((value, index) => (
        // index can be used as a key since the elements of tileArray dont get added, deleted or reordered.
        <Tile
          setLocalHydration={setLocalHydration}
          localHydration={localHydration}
          currentPlayer={currentPlayer}
          tileArray={tileArray}
          setTileArray={setTileArray}
          value={value}
          key={index}
          index={index}
        />
      ))
    );
  }, [tileArray, currentPlayer, localHydration]);

  return (
    <Container>
      {gameOver !== "" && <WinnerModal winner={gameOver} />}
      {tileJSX}
    </Container>
  );
};

export default Dashboard;
