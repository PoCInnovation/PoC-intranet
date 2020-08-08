import React from "react";
import styled from "styled-components";
import Logo from "./poc_logo";
import ProfilPic from "./profil_pic";

const StyledImageBloc = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    
    @media screen and (max-width: 700px), screen and (max-height: 500px) {
        flex-direction: row;
        order: 2;
        justify-content: space-between;
    }
`;

const ImageBloc = () => {
    return (
        <StyledImageBloc>
            <Logo/>
            <ProfilPic/>
        </StyledImageBloc>
    );
};

export default ImageBloc;