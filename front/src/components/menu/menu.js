import React from "react";
import './menu.css';

/*
  Todo [PP handling]
  Récupérer l'image upload, vérifier le content, le modifier..
  Ensuite on stock le path et on le récupère
  ! PP GITHUB must be remove !
  Renommer l'image par un nombre unique pour stocker l'img et pas avoir le nom en dur
*/

function Menu() {
    return (
        <div className="panel">
            <div className="images">
                <img className="logo" src={require('../../img/poc_logo_black.svg')} alt="logo poc"/>
                <img className="profil-pic" src={require('../../img/pp-github.jpg')} alt="profil picture"/>
            </div>
            <div className="nav-icon">Nav icon</div>
            <div className="categories">
                <p>Projet</p>
                <p>Planning</p>
                <p>News</p>
                <p>Paramètres</p>
            </div>
        </div>
    );
}

export default Menu;