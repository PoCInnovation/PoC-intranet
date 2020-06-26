import { ApolloServer } from 'apollo-server-express';
import { schema } from './schema';
import { createContext } from './context';
import http from 'http';
import express from 'express';
import multer from 'multer';
import cors from 'cors';

const app = express();
app.use(cors())
let server = http.createServer(app);
const apolloServer = new ApolloServer({ schema, context: createContext });


app.get('/coucou', (req, res) => {
  console.log('yo');
  res.send('salut toi');
});

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


apolloServer.applyMiddleware({
  app,
  path: '/',
  cors: true
});

server.listen(4000,
  () => {
    console.log(`🚀 Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/js/graphql-apollo-server#using-the-graphql-api`);
  }
);