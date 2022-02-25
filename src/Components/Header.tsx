import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 4rem;
  margin-bottom: 10px;
  color: #ff8f0e;
  text-shadow: 0px 3px 7px black;
  user-select: none;
`;
const Header = () => {
  return <Container>Tic Tac Toe</Container>;
};

export default Header;
