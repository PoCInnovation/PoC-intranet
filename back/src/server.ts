import { ApolloServer } from "apollo-server-express";
import express from 'express'
import { createServer } from 'http'
import { schema } from "./schema";
import { createContext } from "./context";

const app = express();
let server = createServer(app);
const apolloServer = new ApolloServer({schema, context: createContext });

app.get('/hello', (req, res) => {
	res.send('hello world');
})

apolloServer.applyMiddleware({
	app,
	path: '/',
	cors: true
})

server.listen(4000, () => {
	console.log('http://localhost:4000/')
})
