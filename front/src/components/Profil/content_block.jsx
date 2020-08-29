import React, {useEffect, useState} from "react";
import ProjectBlock from "./project_card";
import TeamMatesBlock from "./team_mates";
import styled from "styled-components";
import getProjectInfo from "../../request/get_project_infos";

const StyledContentBlock = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 80%;
    @media screen and (max-width: 700px), screen and (max-height: 500px) {
        margin-top: -50px;
    }

   
//   background-color: #f8ac72;
`;

const StyledTitle = styled.h1`
    margin-bottom: 10px;
    font-size: 30px;
    font-weight: 600;
`;

const ContentBlock = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const getProjects = async () => {
      const projects = await getProjectInfo(sessionStorage.getItem('mail'))
      setProjects(projects);
    };
    getProjects();
  }, [])

  return (
    <StyledContentBlock>
      <StyledTitle> Projets </StyledTitle>
      <ProjectBlock projects={projects}/>
      <StyledTitle>Team mates</StyledTitle>
      <TeamMatesBlock/>
    </StyledContentBlock>
  )
};

export default ContentBlock
