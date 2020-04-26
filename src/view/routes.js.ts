import express from "express";
import bodyParser from "body-parser";

// ? Controller
import { isBodyValid } from "../controllers/validation";
import { userSchema, idSchema } from "../controllers/schema_joi";
import { addUserToDb, getAllUserFromDb, deleteUserFromDb } from "../controllers/controller_user";


const app = express();
app.use(bodyParser.json());

async function initServer() {
    await app.listen(8080);
    console.log("Server ready, listen on port 8080");
}

async function api() {
    await initServer();
    app.get('/test', (req, res) => { // ! To remove later
        console.log("Find request");
        res.status(200);
        res.send('Server ready');
    });

    // ? ------------------------- USER ACTIONS ------------------------- ? //
    app.post('/user/create', isBodyValid(userSchema), async (req, res) => {
        await addUserToDb(req.body)
            .then(() => {
                res.status(200);
                res.send("User created");
            })
            .catch(() => {
                res.status(400);
                res.send("Operation failed");
            });
    });

    app.get('/users', async (req, res) => {
        await getAllUserFromDb()
            .then(users => {
                res.status(200);
                res.send(users);
            }).catch(() => {
                res.status(400);
                res.send("Operation failed");
            });
    });

    app.delete('/user/delete', isBodyValid(idSchema), async (req, res) => {
        await deleteUserFromDb(req.body.id)
            .then(() => {
                res.status(200);
                res.send("User deleted");
            })
            .catch(() => {
                res.status(400);
                res.send("Operation failed");
            });
    });
    // ? ---------------------------------------------------------------- ? //

    // ? ------------------------- ROLES ACTIONS ------------------------ ? //

    // ? ---------------------------------------------------------------- ? //
}

export { api };