import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { createServer } from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import schema from './schema';
import { createContext } from './context';
import router from './routes/routes';
import { config } from '../config';

import pocAirtable from './integrations/airtable/AirtableSDK';

/**
 * @description Server init
 */
const app = express();
const server = createServer(app);
const apolloServer = new ApolloServer({ schema, context: createContext });

/**
 * @description Handle file upload
 *
 * - Enable cors
 * - Config cors middleware
 * - Enable form/data parsing
 */
app.use(
	cors({
		origin: true,
	}),
);

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

/**
 * @description Apply router
 */
app.use(router);

/**
 * @description Apply apollo Server on express
 */
apolloServer.applyMiddleware({
	app,
	path: '/',
	cors: true,
});

server.listen(config.port, () => {
	// eslint-disable-next-line no-console
	console.log('http://localhost:4000/');
});
