import conf from '../config'

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
    let user = 'pp-github.jpg';
    return `${conf.server}/${conf.directory.profil}/${user}`;
};

export default getProfilPic;