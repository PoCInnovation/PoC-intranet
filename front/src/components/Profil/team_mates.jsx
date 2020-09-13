import React, {Component} from 'react';
import styled from "styled-components";

const StyledTeamMatesBlock = styled.div`
  width: 100%;
  height: auto;
`

const StyledTeamMatesContainer = styled.div`
  width: 100%;
  height: 300px;
  border: 1.5px #b4b4b4 solid;
  border-radius: 10px;

`

class TeamMatesBlock extends Component {
    renderTeamMates() {
      const projects = this.props.projects;
      if (!projects) return (<div/>)

      const userMail = sessionStorage.getItem('mail');
      const teammates = projects.map((project) => {
        const { respo, members } = project;
        return respo.concat(members)
      })[0].filter((mate) => mate.email !== userMail);

      return teammates.map((mate, i) => {
        const { name } = mate;

        // todo Do the style vincent please <3
        return (
          <div key={i}>
            {name}
          </div>
          )
      })
    }

    render() {
        return (
            <StyledTeamMatesBlock>
              <StyledTeamMatesContainer>
                {this.renderTeamMates()}
              </StyledTeamMatesContainer>
            </StyledTeamMatesBlock>
        );
    }
}

export default TeamMatesBlock;
