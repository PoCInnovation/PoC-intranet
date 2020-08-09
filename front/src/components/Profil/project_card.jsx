import React, {Component} from 'react';
import styled from "styled-components";
import getProjectInfo from "../../request/get_project_infos";

const StyledProjectCard = styled.div`
  display: flex;
  color: #373737;  
  overflow: hidden;
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
    
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-left: 10px;
  }
  
  p {
    font-weight: 600;
    font-size: 12px;
  }
`;

const StyledProjectBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;  
  flex-wrap: wrap;
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
                        <StyledProjectCard key={i} nbr={100 / this.state.data.projects.length - (1 * this.state.data.projects.length)}>
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