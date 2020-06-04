import React from "react";
import styled from "styled-components";

const StyledLogo = styled.img`
    width: 100px;
    height: 100px;
    
    @media screen and (max-width: 700px), screen and (max-height: 500px) {
        order: 2;
    }
`;

const Logo = () => {
    return (
        <StyledLogo
            src={require('../../img/poc_logo_black.svg')}
            alt="logo poc"/>
    );
};

export default Logo;