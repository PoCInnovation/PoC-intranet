import React from "react";
import styled from "styled-components";
import LogoOffice from '../../img/office-365-logo.svg';

const StyledAuthButton = styled.button`    
    display: flex;
    justify-content: space-between;
    justify-items: center;
    text-align: center;
    flex-direction: column;
    flex-flow: column nowrap;
    
    margin: 0 auto;
    padding: 10px;
    border-radius: 10px;
    border: 1.5px solid;
 
    img {
      justify-content: center;
      justify-items: center;
      width: 70%;
      height: 70%;
      margin-left: calc(100% - 85%);
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