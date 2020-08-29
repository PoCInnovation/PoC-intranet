import React from "react";
import styled from "styled-components";
import ImageBloc from "./image_bloc";
import BurgerMenu from "./burger_menu";

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
    width: 100%;
    box-shadow: 1px 0 25px rgba(0, 0, 0, 0.25);
     @media screen and (max-width: 700px), screen and (max-height: 500px) {
         flex-direction: column;
         position: fixed;
         top: 0;
         left: 0;
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
