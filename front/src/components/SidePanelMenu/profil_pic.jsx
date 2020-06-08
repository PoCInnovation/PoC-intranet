import React from "react";
import styled from "styled-components";
import getProfilPic from "../../request/get_profil_pic";

const StyledPP = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    
    @media screen and (max-width: 700px), screen and (max-height: 500px) {
        position: absolute;
        right: 15px;
        margin: 0;
        order: 3;
    }
`;



const ProfilPic = () => {
    return (
        <StyledPP
            src={getProfilPic()}
            alt="profil picture"/>
    );
};

export default ProfilPic;
