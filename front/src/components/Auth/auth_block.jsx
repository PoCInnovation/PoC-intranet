import React, {Component} from "react";
import styled from "styled-components";
import AuthButton from "./auth_button";
import MicrosoftLogin from "react-microsoft-login";
import config from "../../config";
import {withRouter} from "react-router-dom";
import getCookie from "../../get_cookie";
import getUserInfoFromMSGraph from "../../request/call_ms_api";
import getUsername from "../../request/get_username";
import registerUser from "../../request/registerUser";

const StyledLogo = styled.img`
    display: flex;
    width: 100px;
    height: 100px;
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
    width: 100%;
    min-width: 250px;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-items: center;
    flex-flow: column nowrap;
`;

const StyledErrorMessage = styled.p`
    text-align: center;
    color: #e74c3c;
    font-weight: 600;
`;

const AuthContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100;

    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 30vh;
`;

const MicroContainer = styled.div`
    display: flex;

    width: 100%;
    justify-content: center;
    align-items: center;
    padding-left: 30%;
`;


class AuthBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {valid: true, error_message: ''};
    }

    async loadData(userInfo) {
        sessionStorage.setItem('username', userInfo.displayName);
        sessionStorage.setItem('mail', userInfo.mail);

        const userExist = await getUsername(userInfo.mail);

        if (!userExist.data.user) {
            if (!await registerUser(userInfo.mail))
                return 'server error';
        }
        return undefined;
    }

    async componentDidMount() {
        const token = getCookie('token');
        const userInfo = await getUserInfoFromMSGraph(token);

        if (!userInfo.error) {
            const log = await this.loadData(userInfo);
            if (!log) {
                //this.props.history.push('/profil');
            }
        }
    }

    // Stocker userInfo dans session
    async authHandler(err, data) {
        if (err === null) {
            const userInfo = await getUserInfoFromMSGraph(data.authResponseWithAccessToken.accessToken);

            this.setState(() => this.state.valid = (!userInfo.error));
            if (this.state.valid) {
                document.cookie = 'token=' + data.authResponseWithAccessToken.accessToken + ";path=/";
                const log = await this.loadData(userInfo);

                if (!log) {
                    this.props.history.push('/profil');
                } else {
                    this.setState({valid: false, error_message: 'Server Error'});
                }
            }
        } else {
            this.setState({valid: false, error_message: 'Login Failed'});
        }
    }

    renderFail(valid) {
        if (valid === false) {
            return (<StyledErrorMessage>{this.state.error_message}</StyledErrorMessage>);
        } else {
            return (<div/>);
        }
    }

    render() {
        return (
            <AuthContainer>
                <StyledAuthBlock>
                    <LogoPoc />
                    <MicroContainer>
                        <MicrosoftLogin
                            clientId={config.client_id}
                            authCallback={(err, data) => {
                                this.authHandler(err, data).then();
                            }}
                            children={AuthButton()} />
                        {this.renderFail(this.state.valid)}
                    </MicroContainer>
                </StyledAuthBlock>
            </AuthContainer>
        );
    }
}

export default withRouter(AuthBlock);
