const { ApolloServer, gql } = require('apollo-server');
const typeDefs = gql`
type users {
    email: String
    password: String
}

type Query {
    users : [users]
}

type Mutation {
    addusers(email: String, password:String): users
}
`;

const users = [
    {
        email: 'toto@demo.com', 
        password : 'toto',
    },
    {
        email: 'tata@demo.com', 
        password : 'tata',
    },
];

const resolvers = {
    Query: {
        users: () => users,
    },
    Mutation: {
        addusers: (root: any, args: { email: string, password: string }) => {
            users.push( { email: args.email, password: args.password });
            return ( { email: args.email, password: args.password })
        },
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }: {url: string}) => {
    console.log(` Server ready at ${url}`);
});
