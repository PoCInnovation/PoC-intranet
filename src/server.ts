import { ApolloServer } from 'apollo-server';
import { schema } from './schema';
import { createContext } from './context';
import { getAllAirtable_Id, getTable_by_id, getAllTable_Id } from './integration/airtable/airtable'

//getAllAirtable_Id();
//getTableInfo();
getAllTable_Id("clément.doucy@epitech.eu");
new ApolloServer({ schema, context: createContext }).listen(
    { port: 4000 },
    () =>
        console.log(
            `🚀 Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/ts/graphql-apollo-server#using-the-graphql-api`,
        ),
);
