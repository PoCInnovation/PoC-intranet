import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'http://localhost:4000/'
});

const client = new ApolloClient({
    cache,
    link
});

export default client;

// ! -------- Exemple de call ----

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