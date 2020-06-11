import React from "react";
import ProjectBlock from "./project_card";
import TeamMatesBlock from "./team_mates";
import styled from "styled-components";

const StyledContentBlock = styled.div`
    height: 100%;
    width: calc(100% - 175px);

   
   margin-top: 75px;
//   background-color: #f8ac72;
`

const ContentBlock = () => {
    return (
        <StyledContentBlock>
            <ProjectBlock/>
            <TeamMatesBlock/>
        </StyledContentBlock>
    )
};

export default ContentBlock