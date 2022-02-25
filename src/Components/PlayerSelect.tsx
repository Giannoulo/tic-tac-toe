import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 3rem;
  color: #fff;
  display: flex;
  align-items: center;
  /* The switch - the box around the slider */
  .switch {
    margin: 0px 10px;
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #4ea8de;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  input:checked + .slider {
    background-color: #64dfdf;
  }
  input:focus + .slider {
    box-shadow: 0 0 1px #64dfdf;
  }
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
  .slider.round:before {
    border-radius: 50%;
  }
`;
const PlayerSelect = ({
  setFirstPlayerX,
  firstPlayerX,
}: {
  setFirstPlayerX: React.Dispatch<React.SetStateAction<boolean>>;
  firstPlayerX: boolean;
}) => {
  return (
    <Container>
      O
      <label className="switch">
        <input
          defaultChecked={true}
          onChange={() => {
            setFirstPlayerX(!firstPlayerX);
          }}
          type="checkbox"
        />
        <span className="slider round"></span>
      </label>
      X
    </Container>
  );
};

export default PlayerSelect;
