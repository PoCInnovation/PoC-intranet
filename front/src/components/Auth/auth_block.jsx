import React, {Component} from "react";
import styled from "styled-components";
import AuthButton from "./auth_button";
import MicrosoftLogin from "react-microsoft-login";
import config from "../../config";
import {withRouter} from "react-router-dom";
import getCookie from "../../get_cookie";
import getUserInfoFromMSGraph from "../../request/call_ms_api";

const StyledLogo = styled.img`
    width: 100px;
    height: 100px;
    
    margin: 0 auto;
`;

const LogoPoc = () => {
    return (
        <StyledLogo
            src={require('../../img/poc_logo_black.svg')}
            alt="logo poc"/>
    );
};

const StyledAuthBlock = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap%27');
    * {
      font-family: 'Montserrat', sans-serif;
    }
    
    height: auto;
    width: 30vw;
    min-width: 250px;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    flex-flow: column nowrap;
    margin: 35vh auto;
`;

const StyledErrorMessage = styled.p`
    text-align: center;
    color: #e74c3c;
    font-weight: 600;
`;


class AuthBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {valid: true};
    }

    async componentWillMount() {
        const token = getCookie('token');
        if (token) {
            await getUserInfoFromMSGraph(token);
            this.props.history.push('/profil');
        }
    }

    async authHandler(err, data) {
        if (err === null) {
            this.setState(() => this.state.valid = true);
            await getUserInfoFromMSGraph(data.authResponseWithAccessToken.accessToken);
            document.cookie = 'token=' + data.authResponseWithAccessToken.accessToken + ";path=/";
            this.props.history.push('/profil');
        } else {
            this.setState(() => this.state.valid = false);
        }
    }

    renderFail(valid) {
        if (valid === false) {
            return (<StyledErrorMessage>Login failed</StyledErrorMessage>);
        } else {
            return (<div/>);
        }
    }

    render() {
        return (
            <StyledAuthBlock>
                <LogoPoc/>
                <MicrosoftLogin clientId={config.client_id}
                                authCallback={(err, data) => {
                                    this.authHandler(err, data);
                                }}
                                children={AuthButton()}/>
                {this.renderFail(this.state.valid)}
            </StyledAuthBlock>
        );
    }
}

export default withRouter(AuthBlock);