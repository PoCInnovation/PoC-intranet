const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: "mariadb",
    storage: "db.mariadb"
});

// ############# PERMS ############# ##
// ? Table of permissions
const perms = [
    'admin',
    'recommend',
    'write_article',
    'add_member',
    'create_project'
];

// ? Define of roles table
const roles = sequelize.define('roles', {
    role_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    role_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

// ? Insert permission into roles tables
perms.forEach(perm => {
    roles[perm] = {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        unique: true
    };
});
// ################################ ##

module.exports = { roles };
