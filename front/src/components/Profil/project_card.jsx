import React, {Component} from 'react';
import styled from "styled-components";
import getProjectInfo from "../../request/get_project_infos";

const StyledProjectCard = styled.div`
  display: inline-block;
  * {
    margin: 0;
    padding: 0;
  }

  color: #373737;  
  padding: 15px;
  overflow: hidden;
  min-width: 240px;
  width: 100%;
  height: 180px;
  border: 1.5px #b4b4b4 solid;
  border-radius: 10px;
  margin-bottom: 15px;
    
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 65px; // To replace later with img
  }
  
  p {
    font-weight: 600;
    font-size: 12px;
  }
`;

const StyledProjectBlock = styled.div`
  width: 100%;
  height: auto;
//  background-color: antiquewhite;
  
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  
`;

class ProjectBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {data: {}, isMounted: false};
    }

    async componentDidMount() {
        this.setState({data: await getProjectInfo(sessionStorage.getItem('mail')), isMounted: true});
    }

    renderProject() {
        if (this.state.data.projects) {
            return this.state.data.projects.map((project, i) => {
                return (
                    <StyledProjectCard key={i}>
                        <h1>{project.name}</h1>
                        <p>{project.description}</p>
                    </StyledProjectCard>
                );
            });
        } else {
            return (<div/>)
        }
    }

    render() {
        if (this.state.isMounted) {
            return (
                <StyledProjectBlock>
                    {this.renderProject()}
                </StyledProjectBlock>
            );
        }
        return (
            <div/>
        );
    }
}

export default ProjectBlock;