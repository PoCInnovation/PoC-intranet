import client from "../apollo_client";
import gql from  'graphql-tag'

const GET_USER = gql`
    query GetUser($mail: String!) {
        user(where: {mail: $mail}) {
            id
            mail
        }
    }
`

const getUsername = async (mail) => {
    return client.query({
        query: GET_USER,
        variables: {
            mail
        }
    })
}

export default getUsername;
