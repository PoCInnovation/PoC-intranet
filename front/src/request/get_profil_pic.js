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
    let userPP = 'default_profil_pic.png';

    const userInfo = await client.query({
        query: GET_PROFIL_PIC,
        variables: {
            mail
        }
    })

    if (userInfo.data.user.profil_pic) {
        userPP = userInfo.data.user.profil_pic;
    }
    return `${conf.server}/${conf.directory.profil}/${userPP}`;
};

export default getProfilPic;