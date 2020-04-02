const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: "mariadb",
    storage: "db.mariadb"
});


const Roles = sequelize.define('Roles', {
    role_id: { 
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    role_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        unique: false
    },
    recommend: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        unique: false
    },
    write_article: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        unique: false
    },
    add_member: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        unique: false
    },
    create_project: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        unique: false
    }
});

module.exports = { Roles };