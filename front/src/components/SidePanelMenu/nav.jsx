import React from "react";
import styled from "styled-components";
import { Link, useHistory } from 'react-router-dom';

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

const LinkDiv = styled(Link)`
    text-decoration: none;
    margin-top : 20px;
    color: black;

    :hover {
      color: lightblue;
    }
`;

const Nav = ({open}) => {
  const history= useHistory();
    return (
        <StyledNav open={open}>
            <LinkDiv onClick={() => history.push('/profil/projet')}>Projet</LinkDiv>
            <LinkDiv to="/profil/projet">Planning</LinkDiv>
            <LinkDiv to="/profil/projet">News</LinkDiv>
            <LinkDiv to="/profil/projet">Paramètres</LinkDiv>
        </StyledNav>
    );
};


/* Don't forget to change link to when pages implemented */

export default Nav;