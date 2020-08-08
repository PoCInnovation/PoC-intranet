import React from "react";
import styled from "styled-components";

const StyledNav = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    
    p {
      font-size: 18px;
      margin: 5px 10px;
    }
      
    @media screen and (max-width: 700px), screen and (max-height: 500px) {
      transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
      transition: 0.5s ease-in-out;
      position: fixed;
      z-index: 5;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      background-color: #ffffff;
      box-shadow: ${({open}) => open ? '0 5px 50px rgba(0, 0, 0, 0.5)' : null};
      padding-top: 50px;
      justify-content: center;
      text-align: center;
      
      p:hover {
        background-color: #f5f5f5;
      }
    }  
`;

const Nav = ({open}) => {
    return (
        <StyledNav open={open}>
            <p>Projet</p>
            <p>Planning</p>
            <p>News</p>
            <p>Paramètres</p>
        </StyledNav>
    );
};

export default Nav;