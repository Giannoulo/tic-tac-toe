import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 7rem;
  user-select: none;
  cursor: pointer;
`;

type Props = {
  value: string;
  index: number;
  currentPlayer: string;
  tileArray: string[];
  setTileArray: React.Dispatch<React.SetStateAction<string[]>>;
};
const Tile = ({ value, index, currentPlayer, tileArray, setTileArray }: Props) => {
  const calculateNewTileArray = () => {
    const newTileArray = [...tileArray];
    newTileArray[index] = currentPlayer;
    return newTileArray;
  };

  const handleTileClick = (e: React.SyntheticEvent) => {
    if (value === "") {
      console.log("click");
      setTileArray(calculateNewTileArray());
    }
  };

  return <Container onClick={handleTileClick}>{value}</Container>;
};

export default Tile;
