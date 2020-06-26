import client from '../apollo_client'
import gql from 'graphql-tag'

const UPLOAD_IMAGE = gql`
    mutation UpdateUser($mail: String!, $filename: String!) {
        updateUser(where: {mail: $mail} data: {profil_pic: $filename}) {
            mail
            profil_pic
        }
    }
`

export const uploadProfilPic = async (filename, mail) => {
    return await client.mutate({
        mutation: UPLOAD_IMAGE,
        variables: {
            mail,
            filename
        }
    })
}