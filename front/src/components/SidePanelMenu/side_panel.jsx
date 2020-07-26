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
    width: 175px;
    height: 100%;
    min-height: 200px;
    box-shadow: 1px 0 25px rgba(0, 0, 0, 0.25);
    
    @media screen and (max-width: 700px), screen and (max-height: 500px) {
        flex-direction: row;
        justify-content: space-evenly;
        width: 100%;
        height: auto;
        min-height: 80px;
        max-height: 120px;
        box-shadow: 0 1px 25px rgba(0, 0, 0, 0.25);
        top: 0;
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
