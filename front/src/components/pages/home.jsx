import SidePanel from "../SidePanelMenu/side_panel";
import ProfilBlock from "../Profil/page";
import styled from "styled-components";
import React from 'react';

const StyledContainer = styled.div`
    display: flex;
    width : 100%;
    justify-content: center;
    @media screen and (max-width: 700px), screen and (max-height: 500px) {
        flex-direction: column;
    }
`;

const SideContainer = styled.div`
    display: flex;
    position: fixed;
    width: 20%;
    @media screen and (max-width: 700px), screen and (max-height: 500px) {
        width: 0px; 
    }
    height: 100%;
    left: 0px;
`;

const HomeContainer = () => {
    return (
      <StyledContainer>
          <SideContainer>
            <SidePanel/>
          </SideContainer>
          <ProfilBlock/>
      </StyledContainer>
    );
}

export default HomeContainer;