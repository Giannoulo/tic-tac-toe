import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  height: 60%;
  width: 60%;
  font-size: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  text-shadow: 0px 5px 7px black;
  animation-name: splash;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;
  @keyframes splash {
    0%,
    100% {
      transform: scale(1);
      opacity: 0;
      color: #64dfdf;
    }
    25%,
    75% {
      color: #5390d9;
    }
    50% {
      transform: scale(1.5);
      opacity: 0.8;
      color: #7400b8;
    }
  }
`;
const PlayerModal = ({player}: {player: string}) => {
  return <Container>{player} turn</Container>;
};

export default PlayerModal;
