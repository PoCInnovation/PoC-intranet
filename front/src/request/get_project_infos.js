import client from "../apollo_client"
import gql from 'graphql-tag'

const GET_PROJECT_INFO = gql`
    query GetProject($mail: String!) {
        user(where: {mail: $mail}) {
            id
            mail
            projects {
                name
                description
            }
        }
    }
`

const getProjectInfo = async (mail) => {
    const userProjects = await client.query({
        query: GET_PROJECT_INFO,
        variables: {
            mail
        }
    })
    return userProjects.data.user;
}

export default getProjectInfo;