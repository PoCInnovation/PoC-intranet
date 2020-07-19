import { ApolloServer } from "apollo-server-express";
import express from 'express'
import { createServer } from 'http'
import { schema } from "./schema";
import { createContext } from "./context";
import router from './routes/routes'
import multer from 'multer';
import bodyParser from "body-parser";
import cors from 'cors';

/**
 * @description Server init
 */
const app = express();
const upload = multer();
let server = createServer(app);
const apolloServer = new ApolloServer({schema, context: createContext });

/**
 * @description Handle file upload
 *
 * - Enable Cors
 * - Enable form/data parsing
 */
app.use(cors({
	origin: true,
}));

app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}));

/**
 * @description Apply router
 */
app.use(router);

app.get('/hello', (req, res) => {
	res.send('hello world');
})

/**
 * @description Apply apollo Server on express
 */
apolloServer.applyMiddleware({
	app,
	path: '/',
	cors: true
})

server.listen(4000, () => {
	console.log('http://localhost:4000/')
})
