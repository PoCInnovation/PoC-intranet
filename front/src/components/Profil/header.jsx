import React from "react";
import styled from "styled-components";
import ProfilePicture from "./profile_pic";
import UserBlock from "./user_block";

const StyledProfileHead = styled.div`
    display: flex;  
 //   background-color: #e70101;
    width: 80%;
    height: 230px;
    box-sizing: border-box;
    
    grid-template-columns: 200px auto;
    align-items: center;
    
    @media screen and (max-width: 700px), screen and (max-height: 500px) {
        margin-top: 10px;
        flex-direction: column;
        height: 300px;
    }
`;

const ProfileHead = () => {
    return (
        <StyledProfileHead>
            <ProfilePicture/>
            <UserBlock/>
        </StyledProfileHead>
    );
};

export default ProfileHead;
