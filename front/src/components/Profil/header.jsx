import React from "react";
import styled from "styled-components";
import ProfilPicture from "./profil_pic";
import UserBlock from "./user_block";

const StyledProfilHead = styled.div`
    background-color: #e70101;
    width: calc(100% - 200px);
    height: 230px;
    box-sizing: border-box;
    
    padding: 15px;
    display: grid;
    grid-template-columns: 200px auto;
    grid-column-gap: 10px;
    align-items: center;
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