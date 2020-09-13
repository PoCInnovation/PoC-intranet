import client from "../apollo_client";
import gql from 'graphql-tag'

const GET_ROLE_PROPERTY = gql`
    query GetUser($mail: String!) {
        user(where: {mail: $mail}) {
            id
            mail
            roles {
                name
                color
            }
        }
    }
`

const getRolesProperty = async (mail) => {
    const userRoles = await client.query({
        query: GET_ROLE_PROPERTY,
        variables: {
            mail
        }
    })

    return userRoles.data.user;
};

export default getRolesProperty;
