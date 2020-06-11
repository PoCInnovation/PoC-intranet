import React from "react";
import styled from "styled-components";
import getUsername from "../../request/get_username";

const StyledUserName = styled.p`
    font-size: 50px;
    font-weight: 600;
    color: #414141;
    margin: 0 0 10px;
    padding: 0;
    white-space: nowrap;
`

const Username = () => {
    return (
        <StyledUserName>
            {getUsername()}
        </StyledUserName>
    )
}
export default Username