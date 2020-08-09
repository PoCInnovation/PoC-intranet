import React from "react";
import styled from "styled-components";

const StyledLogo = styled.img`
    display: flex;
    width: 100px;
    height: 100px;
`;

const Logo = () => {
    return (
        <StyledLogo
            src={require('../../img/poc_logo_black.svg')}
            alt="logo poc"/>
    );
};

export default Logo;