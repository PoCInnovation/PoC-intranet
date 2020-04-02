const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize({
    dialect: "mariadb",
    storage: "db.mariadb"
});

// ############# PERMS ############# ##
// ? Define of roles table
const rolesModel = {
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

// ? Insert permission into roles tables
perms.forEach(perm => {
    rolesModel[perm] = {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        unique: true
    };
});

const roles = sequelize.define('roles', rolesModel);
// ################################ ##

module.exports = {roles};
