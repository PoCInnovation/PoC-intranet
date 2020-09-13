import React, {Component} from 'react';
import styled from "styled-components";

const StyledProjectCard = styled.div`
  display: flex;
  color: #373737;  
  overflow: hidden;
  flex-direction: column;
  height: 180px;
  min-width: 32%;
  width: ${props => props.nbr}%;                  /*calc( (100 / ${props => props.nbr}) - (1 * ${props => props.nbr}))"%";*/
  border: 1.5px #b4b4b4 solid;
  border-radius: 10px;
  margin-bottom: 15px;

  @media screen and (max-width: 700px), screen and (max-height: 500px) {
    flex-direction: column;
    width: 100%;
  }
`;

const StyledProjectBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;  
  flex-wrap: wrap;
`;

const ProjectName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-weight: bold;
    
    margin-top: 5px;
    margin-bottom: 100px;
`;

const ProjectDescription = styled.p`
  font-weight: 600;
  font-size: 12px;
  
  text-align: justify;
  padding: 5px;
`

class ProjectBlock extends Component {
    renderProject() {
        const projects = this.props.projects;

        if (!projects) return (<div/>)

        return projects.map((project, i) => {
            return(
              <StyledProjectCard key={i} nbr={100 / project.length - (1 * project.length)}>
                  <ProjectName>{project.nom}</ProjectName>
                  <ProjectDescription>{project.description}</ProjectDescription>
              </StyledProjectCard>
            )
        })
    }

    render() {
        return (
          <StyledProjectBlock>
              {this.renderProject()}
          </StyledProjectBlock>
        );
    }
}

export default ProjectBlock;
