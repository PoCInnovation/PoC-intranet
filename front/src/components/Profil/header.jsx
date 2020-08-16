import React from "react";
import styled from "styled-components";
import ProfilPicture from "./profil_pic";
import UserBlock from "./user_block";

const StyledProfilHead = styled.div`
    display: flex;  
 //   background-color: #e70101;
    width: 80%;
    height: 230px;
    box-sizing: border-box;
    
    display: flex;
    grid-template-columns: 200px auto;
    align-items: center;
    
    @media screen and (max-width: 700px), screen and (max-height: 500px) {
        margin-top: 10px;
        flex-direction: column;
        height: 300px;
    }
`;

const ProfilHead = () => {
    return (
        <StyledProfilHead>
            <ProfilPicture/>
            <UserBlock/>
        </StyledProfilHead>
    );
};

export default ProfilHead;