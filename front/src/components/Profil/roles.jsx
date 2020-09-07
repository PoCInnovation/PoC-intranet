import React from "react";
import styled from "styled-components";
import getRolesProperty from "../../request/get_roles_property";

const StyledRolesBlock = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    margin-bottom: 10px;
    
    height: auto;
    width: 100%;
        
    p {
      display: block;
      
      padding: 3px 10px;
      margin-top: auto;
      margin-bottom: 10px;
      margin-right: 10px;
      
      min-width: 100px;
      height: 20px;
      border-radius: 2px;
      
      font-size: 15px;      
      font-weight: bold;
      text-align: center;
      color: white;
    }
`;

const StyledRole = styled.p`
  background-color: ${props => props.color};

`;

class RolesBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: {}, isMounted: false};
    }

    async componentDidMount() {
        this.setState({data: await getRolesProperty(sessionStorage.getItem('mail')), isMounted: true});
    }

    renderRoles() {
        /*if (this.state.data.roles) {
            return this.state.data.roles.map((role, i) => {
                return (
                    <StyledRole color={role.color} key={i}>{role.name}</StyledRole>
                );
            });
        } else {
            return (<div/>)
        }*/
        return (null);
    }

    render() {
        if (this.state.isMounted) {
            return (
                <StyledRolesBlock>
                    {this.renderRoles()}
                </StyledRolesBlock>
            );
        }
        return (
            <div/>
        );
    }
}

export default RolesBlock;