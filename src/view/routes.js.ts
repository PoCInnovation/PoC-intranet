import express from "express";
import bodyParser from "body-parser";
import { isBodyValid } from "../controllers/validation";
import { userSchema } from "../controllers/schema_joi";

const app = express();

app.use(bodyParser.json());

async function initServer() {
    await app.listen(8080);
    console.log("Server ready, listen on port 8080");
}

async function api() {
    await initServer();
    app.get('/test', (req, res) => {
        console.log("Find request");
        res.status(200);
        res.send('Server work, listen on post 8080');
    });

    app.post('/user/create', isBodyValid(userSchema), async (req, res) => {
        console.log(req.body);
        res.send("User find");
    });
}

export { api };