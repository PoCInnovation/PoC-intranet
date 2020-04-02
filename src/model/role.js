const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize({
    dialect: "mariadb",
    storage: "db.mariadb"
});

// ############# Roles ############# ##
// ? Define roles model
const roleModel = {
    role_id: {
        type: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4,
        allowNull: true,
        primaryKey: true
    },
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
perms.forEach(perm => {
    roleModel[perm] = {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        unique: true
    };
});

// ? Create roles table from model
const role = sequelize.define('role', roleModel);
// ################################ ##

module.exports = {role};
