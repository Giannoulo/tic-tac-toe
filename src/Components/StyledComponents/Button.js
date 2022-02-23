import styled from "styled-components";

const Button = styled.button`
  background-color: #6930c3;
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 5px 15px;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  margin: 15px;
  padding: 12px 20px;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  :active {
    transform: translate(2px, 2px);
  }
`;

export default Button;
