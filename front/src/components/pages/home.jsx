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
const HomeContainer = () => {
    return (
      <StyledContainer>
        <SidePanel/>
        <ProfilBlock/>
      </StyledContainer>
    );
};

export default HomeContainer;
