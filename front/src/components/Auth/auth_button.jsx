import React from "react";
import styled from "styled-components";
import LogoOffice from '../../img/office-365-logo.svg';

const StyledAuthButton = styled.button`    
    display: flex;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    flex-flow: column nowrap;
    
    margin-top: 30px;
    padding: 10px;
    border-radius: 10px;
    border: 1.5px solid;
    background-color: white;

    @media screen and (max-width: 700px), screen and (max-height: 500px) {
          width: 70%;
    }
 
    img {
      justify-content: center;
      justify-items: center;
      width: 70%;
      height: 70%;
    }
`;

/*        <StyledAuthButton>

        </StyledAuthButton>
*/
const AuthButton = () => {
    return (
        <StyledAuthButton>
            <p>Login with</p>
            <img src={LogoOffice} alt="Logo Office 365"/>
        </StyledAuthButton>
    );
};

export default AuthButton;