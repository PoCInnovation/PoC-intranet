import { ApolloServer } from 'apollo-server-express';
import { schema } from './schema';
import {createContext} from './context';
import { createServer } from 'http';
import express from 'express';
import { PrismaClient } from 'nexus-plugin-prisma/client'
import multer from 'multer';
import cors from 'cors';

const app = express();
let server = createServer(app);
const apolloServer = new ApolloServer({ schema, context: createContext });

const prisma = new PrismaClient();

app.get('/coucou', async (req, res) => {
    console.log('before');
    await prisma.user.findMany().then(r => console.log(r));
    console.log('after');
    res.send('salut toi');
});

apolloServer.applyMiddleware({
    app,
    path: '/',
    cors: true
});

server.listen(4000,
    async () => {
        console.log(`🚀 Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/js/graphql-apollo-server#using-the-graphql-api`);
    }
);

/*


let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + '../../front/public/profil_pic');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

let upload = multer({ storage: storage }).single('file');

app.post('/upload', (req, res) => {
  console.log('Uploading...');
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError || err ) {
      console.log(err);
      return res.status(500).json(err)
    }
    return res.status(200).send(req.file)
  })
});
*/
