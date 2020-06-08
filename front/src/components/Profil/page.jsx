import React from "react";
import styled from "styled-components";
import ProfilHead from "./header";

const StyledProfilBlock = styled.div`
  background-color: #61dafb;
  margin-left: 200px;
  
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
`

const ProfilBlock = () => {
    return (
        <StyledProfilBlock>
            <ProfilHead/>
        </StyledProfilBlock>
    )
};

export default ProfilBlock