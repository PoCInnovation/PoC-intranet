const {Sequelize, DataTypes} = require('sequelize');
const bodyParser = require('body-parser');
const express = require('express');
const mariadb = require('mariadb');
const {UUID} = require('uuidv4')


/*const pool = mariadb.createPool({
    host: 'localhost', 
    user:'vincent', 
    password: 'chauveau',
    name: 'intra'
});*/


const sequelize = new Sequelize('intra', 'vincent', 'chauveau', {
    dialect: "mariadb"
});

// ############# Roles ############# ##
// ? Define roles model
const roleModel = {
    role_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
};

// ? Table of permissions
const perms = [
    'admin',
    'recommend',
    'write_article',
    'add_member',
    'create_project'
];

// ? Insert permission into roles model
/*perms.forEach(perm => {
    roleModel[perm] = {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true,
        unique: true
    };
});*/

// ? Create roles table from model
const role = sequelize.define('roles', roleModel);

// ? Add new role in the table


async function createRole(name) {
    console.log(name);
    let right = {admin: false, recommend: false, write_article: false, add_member: false, create_project: false}
    if (name) {
        try { 
            await role.create({role_name: name});
        } catch(e) {
            console.log(e);
        }
    } else
        return console.log("Please give me a role name\n");
}

async function startServer() {
    try  {
        await sequelize.sync();
    } catch(e) {
        console.log(e);
    }

    let app = express();
    app.listen(8080);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.get('/', async (req, res) => {
        res.send("conncted");
        return
    });
    app.post('/create_role', async (req, res) => {
            try {
            await createRole(req.body.name);
            } catch(e) {
                console.log(e);
            }

        //console.log(user);
    })
}

startServer();

module.exports = {role};
