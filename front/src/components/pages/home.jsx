import SidePanel from "../SidePanelMenu/side_panel";
import ProfilBlock from "../Profil/page";
import styled from "styled-components";
import React from 'react';

const StyledContainer = styled.div`
    //@media screen and (min-width: 4OOpx), screen and (min-height: 500px) {
        display: flex;
        width : 100%;
        justify-content: center;
   // }
`;

const Logo = styled.img`
    display: none;
    width: 100px;
    height: 100px;
    position: absolute;
    margin-top: 0px;
    left: 75%;
    @media screen and (max-width: 700px), screen and (max-height: 500px) {
        display: flex;
    }
`;

const HomeContainer = () => {
    return (
        <StyledContainer>
            <Logo 
                src={require('../../img/poc_logo_black.svg')}
                alt="logo poc"
            />
            <SidePanel/>
            <ProfilBlock/>
        </StyledContainer>
    );
}

export default HomeContainer;