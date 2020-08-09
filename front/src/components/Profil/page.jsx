import React, {Component} from "react";
import styled from "styled-components";
import ProfilHead from "./header";
import ContentBlock from "./content_block";
import getCookie from "../../get_cookie";
import getUserInfoFromMSGraph from "../../request/call_ms_api";
import {withRouter} from "react-router-dom";

const StyledProfilBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width : 80%;
  box-sizing: border-box;
  margin-top: 10px;
  @media screen and (max-width: 700px), screen and (max-height: 500px) {
    width: 100%;
  }
`;

class ProfilBlock extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        const token = getCookie('token');

        if (!token) {
            this.props.history.push('/');
        } else {
            const userInfo = await getUserInfoFromMSGraph(token);

            if (userInfo.error) {
                this.props.history.push('/')
            }
        }
    }

    render() {
        return (
            <StyledProfilBlock>
                <ProfilHead/>
                <ContentBlock/>
            </StyledProfilBlock>
        );
    }
}



export default withRouter(ProfilBlock);
