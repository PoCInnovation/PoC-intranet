import React from "react";
import styled from "styled-components";
import getUsername from "../../request/get_username";
import getCookie from "../../get_cookie";
import getUserInfoFromMSGraph from "../../request/call_ms_api";
import {withRouter} from "react-router-dom";

const StyledUserName = styled.p`
    display: flex;
    font-size: 50px;
    font-weight: 600;
    color: #414141;
    margin: 0 0 10px;
    white-space: nowrap;
    @media screen and (max-width: 700px), screen and (max-height: 500px) {
        font-size: 30px;
    }
`;

class Username extends React.Component {
    constructor(props) {
        super(props);
        this.name = sessionStorage.getItem('username');
    }

    render() {
        return (
            <StyledUserName>
                {this.name}
            </StyledUserName>
        );
    }
}

export default withRouter(Username);