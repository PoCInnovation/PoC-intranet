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
      font-family: 'Montserrat', sans-serif;
    }

    display: flex;
    background: #ffffff;
    flex-direction: column;
    grid-row-gap: 22.5%;
    align-items: center;
    width: 20%;
    box-shadow: 1px 0 25px rgba(0, 0, 0, 0.25);
     @media screen and (max-width: 700px), screen and (max-height: 500px) {
        flex-direction: column;
        justify-content: center;
        width: 0px;
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
