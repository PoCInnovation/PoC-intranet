import React from "react";
import styled from "styled-components";

const StyledPP = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    
    @media screen and (max-width: 700px), screen and (max-height: 500px) {
        position: absolute;
        right: 15px;
        margin: 0;
        order: 3;
    }
`;

/*
  Todo [PP handling]
  Récupérer l'image upload, vérifier le content, le modifier..
  Ensuite on stock le path et on le récupère
  ! PP GITHUB must be remove !
  Renommer l'image par un nombre unique pour stocker l'img et pas avoir le nom en dur
   Todo [PROFIL_PIC DISPLAY]
   Call à la db, placer les variables server et pp_dir
   ensuite on iras stocker dans la db le nom, on concat et c'est good :)
*/
const getProfilPic = () => {
    const SERVER = 'http://localhost:3000';
    const PP_DIR = 'profil_pic';
    let user = 'pp-github.jpg';
    return `${SERVER}/${PP_DIR}/${user}`;
};

const ProfilPic = () => {
    return (
        <StyledPP
            src={getProfilPic()}
            alt="profil picture"/>
    );
};

export default ProfilPic;
