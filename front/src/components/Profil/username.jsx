import React from "react";
import styled from "styled-components";
import getUsername from "../../request/get_username";

const StyledUserName = styled.p`
    font-size: 50px;
    font-weight: 600;
    color: #414141;
    margin: 0 0 10px;
    padding: 0;
    white-space: nowrap;
`;

class Username extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: '', isMounted: false}
    }

    async componentDidMount() {
        this.setState({data: await getUsername(), isMounted: true})

    }

    render() {
        return (
            <StyledUserName>
                {this.state.data}
            </StyledUserName>
        );
    }
}

export default Username;