import React from "react";
import styled from "styled-components";

const StyledDescription = styled.textarea`
  display: flex;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 15px;
  border: 1.5px rgb(200, 200, 200) solid;
  min-height: 120px;
  max-width: 99%;
`;

const Description = () => {
    return (
        <StyledDescription placeholder="Description..." defaultValue={""}/>
    );
};

export default Description;