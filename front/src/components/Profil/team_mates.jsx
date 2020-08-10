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

const StyledTitle = styled.h1`
    margin-bottom: 10px;
    font-size: 30px;
    font-weight: 600;
`

class TeamMatesBlock extends Component {
    render() {
        return (
            <StyledTeamMatesBlock>
                <StyledTitle>Team mates</StyledTitle>
                <StyledTeamMatesContainer>
                </StyledTeamMatesContainer>
            </StyledTeamMatesBlock>
        );
    }
}

export default TeamMatesBlock;