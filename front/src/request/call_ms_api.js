import config from "../config";
/*
import client from "../apollo_client";
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const QUERYTEST = gql`
    {
        users {
            mail
            projects {
                name
            }
            roles {
                name
            }
        }
    }
`

const TestExec = () => {
    client.query({
        query: QUERYTEST
    }).then(res => console.log(res.data.users.forEach(user => console.log(user.mail, user.projects, user.roles))));
}
*/

const getUserInfoFromMSGraph = async (token) => {
    const headers = new Headers();
    const bearer = `Bearer ${token}`;

    headers.append("Authorization", bearer);

    const option = {
        method: "GET",
        headers: headers
    };

    return fetch(config.urlMS + 'me', option)
        .then(response => response.json())
        .catch(e => console.log(e));
};

export default getUserInfoFromMSGraph;