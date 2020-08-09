import React from "react";
import styled from "styled-components";
import UserName from "./username";
import RolesBlock from "./roles";
import Description from "./description";

const StyledUserBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 100%;
  height: 200px;
  @media screen and (max-width: 700px), screen and (max-height: 500px) {
    margin-left: 0px;
    margin-top: 50px;
  }
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