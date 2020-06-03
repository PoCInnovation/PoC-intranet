import React from "react";
import styled from "styled-components";

const StyledCategories = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    
    p {
      font-size: 23px;
      margin-top: 5px;
    }
    
    @media screen and (max-width: 500px), screen and (max-height: 500px) {
        display: none;
        position: absolute;
        left: 5px;
        order: 1;      
    }  
`;

const Categories = () => {
    return (
        <StyledCategories>
            <p>Projet</p>
            <p>Planning</p>
            <p>News</p>
            <p>Paramètres</p>
        </StyledCategories>
    );
};

export default Categories;