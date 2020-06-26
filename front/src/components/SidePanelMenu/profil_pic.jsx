import React from "react";
import styled from "styled-components";
import getProfilPic from "../../request/get_profil_pic";

const StyledPP = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    
    @media screen and (max-width: 700px), screen and (max-height: 500px) {
        position: absolute;
        right: 15px;
        margin: 0;
        order: 3;
    }
`;


class ProfilPic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {picture: null}
    }

    async componentDidMount() {
        this.setState({
            picture: await getProfilPic(sessionStorage.getItem('mail'))
        })
    }

    render() {
        return (
            <StyledPP
                src={this.state.picture}
                alt="profil picture"/>
        );
    }
}

export default ProfilPic;
