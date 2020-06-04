import React, {useState} from "react";
import styled from "styled-components";
import Nav from "./nav";

const StyledBurgerIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 700px), screen and (max-height: 500px) {
    display: flex;
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 35px;
    left: 15px;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 20;
  
    div {
      transform-origin: 1px;
      transition: all 0.3s linear;
      width: 2rem;
      height: 0.35rem;
      background-color: ${({open}) => open ? '#939393' : '#333'};
      border-radius: 10px;
      
      &:nth-child(1) {
        transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
      }
      
      &:nth-child(2) {
        transform: ${({open}) => open ? 'translateX(-100vh)' : 'translationX(0)'};
        opacity: ${({open}) => open ? 0 : 1})
      }
      
      &:nth-child(3) {
        transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      }
    }
  }
`;

const BurgerMenu = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
        <StyledBurgerIcon open={open} onClick={() => setOpen(!open)}>
            <div/>
            <div/>
            <div/>
        </StyledBurgerIcon>
        <Nav open={open}/>
        </>
    );
};

export default BurgerMenu;