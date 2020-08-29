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
    render() {
        return (
            <StyledTeamMatesBlock>
                <StyledTeamMatesContainer>
                </StyledTeamMatesContainer>
            </StyledTeamMatesBlock>
        );
    }
}

export default TeamMatesBlock;
