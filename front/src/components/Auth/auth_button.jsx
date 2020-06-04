import React from "react";
import styled from "styled-components";
import LogoOffice from '../../img/office-365-logo.svg';

const StyledAuthButton = styled.div`    
    display: flex;
    justify-content: space-between;
    justify-items: center;
    text-align: center;
    flex-direction: column;
    flex-flow: column nowrap;
    
    margin: 0 auto;
    
    border-radius: 10px;
    border: 1.5px solid;

    img {
      width: 100%;
      height: 100%;
    }
`;

const AuthButton = () => {
    return (
        <StyledAuthButton>
            <p>Login with</p>
            <img src={LogoOffice} alt="Logo Office 365"/>
        </StyledAuthButton>
    );
};

export default AuthButton;