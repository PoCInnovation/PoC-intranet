import React from "react";
import styled from "styled-components";

const StyledCategories = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    p {
      font-size: 23px;
      margin: 5px 10px;
    }
    
    @media screen and (max-width: 500px), screen and (max-height: 500px) {
      display: ${({open}) => open ? 'flex' : 'none'};
      transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
      transition: transform 0.3s ease-in-out;
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      background-color: #ffffff;
      box-shadow: ${({open}) => open ? '0 5px 50px rgba(0, 0, 0, 0.5)' : null};
      padding-top: 50px;
      justify-content: center;
      
    }  
`;

const Categories = ({open}) => {
    return (
        <StyledCategories open={open}>
            <p>Projet</p>
            <p>Planning</p>
            <p>News</p>
            <p>Paramètres</p>
        </StyledCategories>
    );
};

export default Categories;