import React from "react";
import ProjectBlock from "./project_card";
import TeamMatesBlock from "./team_mates";
import styled from "styled-components";

const StyledContentBlock = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 80%;

   
//   background-color: #f8ac72;
`;

const StyledTitle = styled.h1`
    margin-bottom: 10px;
    font-size: 30px;
    font-weight: 600;
`;

const ContentBlock = () => {
    return (
        <StyledContentBlock>
            <StyledTitle> Projets </StyledTitle>
            <ProjectBlock/>
            <TeamMatesBlock/>
        </StyledContentBlock>
    )
};

export default ContentBlock