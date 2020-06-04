import React from "react";
import styled from "styled-components";
import AuthButton from "./auth_button";

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
}

const StyledAuthBlock = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap%27');
    * {
      padding: 0;
      font-family: 'Montserrat', sans-serif;
    }
    
    height: 100%;
    width: 30vw;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    flex-flow: column nowrap;
    margin: 35vh auto;
    
`;

const AuthBlock = () => {
    return (
        <StyledAuthBlock>
            <LogoPoc/>
            <AuthButton/>
        </StyledAuthBlock>
    );
};

export default AuthBlock;