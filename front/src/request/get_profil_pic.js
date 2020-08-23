import conf from '../config'
import client from "../apollo_client";
import gql from 'graphql-tag'

const GET_PROFIL_PIC = gql`
    query getPP($mail: String!) {
        user(where: {mail: $mail}) {
            id
            mail
            profil_pic
        }
    }
`

const getProfilPic = async (mail) => {
    let userPP = 'default_profil_pic.jpg';

    const userInfo = await client.query({
        query: GET_PROFIL_PIC,
        variables: {
            mail
        }
    })

    const user = userInfo.data.user;
    if (user && user.profil_pic) {
        userPP = user.profil_pic;
    }
    return `${conf.server}/${conf.directory.profil}/${userPP}`;
};

export default getProfilPic;
