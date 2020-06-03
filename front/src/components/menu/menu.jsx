import React from "react";
import styled from "styled-components";
import ImageBloc from "./image_bloc";
import Categories from "./categories";
import BurgerIcon from "./burger_icon";
/*
  Todo Faire le menu burger
*/

const StyledMenu = styled.div`
    * {
      padding: 0;
      margin: 0;
    }

    display: flex;
    position: fixed;
    background: #ffffff;
    flex-direction: column;
    grid-row-gap: 22.5%;
    align-items: center;
    width: 23vh;
    height: 100%;
    min-height: 200px;
    box-shadow: 5px 0 50px rgba(0, 0, 0, 0.5);
    
    @media screen and (max-width: 500px), screen and (max-height: 500px) {
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

function Menu() {
    return (
        <StyledMenu>
            <ImageBloc/>
            <BurgerIcon/>
        </StyledMenu>
    );
}

export default Menu;