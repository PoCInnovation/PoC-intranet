import React from "react";
import styled from "styled-components";

const StyledDescription = styled.textarea`
  resize: none;
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 15px;
  border: 1.5px rgb(200, 200, 200) solid;
`;

const Description = () => {
    return (
        <StyledDescription placeholder="Description..." defaultValue={""}/>
    );
};

export default Description;