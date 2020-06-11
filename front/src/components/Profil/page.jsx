import React from "react";
import styled from "styled-components";
import ProfilHead from "./header";
import ContentBlock from "./content_block";

const StyledProfilBlock = styled.div`
  overflow: auto;
//  background-color: #61dafb;
  box-sizing: border-box;
  position: fixed;
  display: flex;
  flex-direction: column;
  
  margin-left: 175px;
  padding: 30px;
  
  width: 100%;
  height: 100%;
`

const ProfilBlock = () => {
    return (
        <StyledProfilBlock>
            <ProfilHead/>
            <ContentBlock/>
        </StyledProfilBlock>
    )
};

export default ProfilBlock