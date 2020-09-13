import SidePanel from "../SidePanelMenu/side_panel";
import styled from "styled-components";
import React from 'react';
import ProjetList from '../Profil/projectList'

const StyledContainer = styled.div`
    display: flex;
    width : 100%;
    justify-content: center;
    @media screen and (max-width: 700px), screen and (max-height: 500px) {
        flex-direction: column;
    }
`;

const ProjectContainer = styled.div`
display: flex;
flex-direction: column;
width : 100%;
margin-left: 25%;
margin-top: 30px;
@media screen and (max-width: 700px), screen and (max-height: 500px) {
  width: 100%;
  margin-left: 0px;
  margin-top: 100px;
}
`;

const User = styled.div`
    display: flex;
    width: 100%;
    font-size: 50px;
    color: dimgrey;
    align-items: center;
`;

const Usename = styled.div`
    display: flex;
    font-size: 40px;
    margin-top: 3px;
    align-items: center;    
    font-weight: bold;
    color: dimgrey;
    margin-left: 15px;
`;

function ProjectPage() {
    return (
        <StyledContainer>
            <SidePanel />
            <ProjectContainer>
                <User>
                    Bienvenue,
                    <Usename>
                        Vincent
                    </Usename>
                    .
                </User>
                <ProjetList />
            </ProjectContainer>
        </StyledContainer>
    );
}

export default ProjectPage;