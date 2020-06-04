import React from "react";
import styled from "styled-components";
import ImageBloc from "./image_bloc";
import BurgerMenu from "./burger_menu";
/*
  Todo Faire le menu burger
*/

const StyledMenu = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap%27');
    * {
      padding: 0;
      margin: 0;
      font-family: 'Montserrat', sans-serif;
    }

    display: flex;
    position: fixed;
    background: #ffffff;
    flex-direction: column;
    grid-row-gap: 22.5%;
    align-items: center;
    width: 200px;
    height: 100%;
    min-height: 200px;
    box-shadow: 5px 0 50px rgba(0, 0, 0, 0.5);
    
    @media screen and (max-width: 700px), screen and (max-height: 500px) {
        flex-direction: row;
        justify-content: space-evenly;
        width: 100%;
        height: auto;
        min-height: 80px;
        max-height: 120px;
        max-width: none;
        box-shadow: 0 5px 50px rgba(0, 0, 0, 0.5);
    }
`;

function SidePanel() {
    return (
        <StyledMenu>
            <ImageBloc/>
            <BurgerMenu/>
        </StyledMenu>
    );
}

export default SidePanel;