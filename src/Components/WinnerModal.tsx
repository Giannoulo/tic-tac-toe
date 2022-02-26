import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 4rem;
  color: #7400b8;
  background-color: #f1f1f197;
  height: 500px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 4px 2px 10px black;
`;
const WinnerModal = ({winner}: {winner: string}) => {
  return (
    <Container>{winner === "stalemate" ? "Stalemate!" : `The winner is ${winner}!`}</Container>
  );
};

export default WinnerModal;
