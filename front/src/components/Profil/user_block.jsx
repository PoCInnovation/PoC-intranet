import React from "react";
import styled from "styled-components";
import UserName from "./username";
import RolesBlock from "./roles";
import Description from "./description";

const StyledUserBlock = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 100%;
  height: 200px;
`

const UserBlock = () => {
    return (
        <StyledUserBlock>
            <UserName/>
            <RolesBlock/>
            <Description/>
        </StyledUserBlock>
    )
};

export default UserBlock