import client from "../apollo_client";
import gql from  'graphql-tag'

const REGISTER_USER = gql`
    mutation AddUser($mail: String!) {
        createUser(data: {mail: $mail}) {
            id
            mail
        }
    }
`

const registerUser = async (mail) => {
    const newUser = await client.mutate({
        mutation: REGISTER_USER,
        variables: {
            mail
        }
    })

    console.log(newUser.data)
    return (newUser.data.createUser.mail && newUser.data.createUser.id)
}

export default registerUser;