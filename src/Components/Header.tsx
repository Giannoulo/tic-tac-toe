import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 4rem;
  margin-bottom: 10px;
  color: #fff;
  user-select: none;
`;
const Header = () => {
  return <Container>Tic Tac Toe</Container>;
};

export default Header;
