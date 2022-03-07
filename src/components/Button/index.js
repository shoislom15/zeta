import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import Button from "@mui/material/Button";

const ButtonWrapper = styled.button`
  background: ${(props) => (props.background ? props.background : "#FA541C")};
  color: ${(props) => (props.color ? props.color : "white")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "0.9375rem")};
  border-radius: 8px;
`;

export default function ButtonComponents(props) {
  return (
    <ButtonWrapper
      background={props.background}
      color={props.color}
      fontSize={props.fontSize}
    >
      <Button variant="color:white">
        <FontAwesomeIcon icon={props.icon} />
        <span>{props.text}</span>
      </Button>
    </ButtonWrapper>
  );
}
