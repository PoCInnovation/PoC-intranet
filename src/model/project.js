const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize({
    dialect: "mariadb",
    storage: "db.mariadb"
});
// ############# Roles ############# ##
// ? Define project model
const projectModel = {
    project_id: {
        type: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4,
        allowNull: true,
        primaryKey: true
    },
    project_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    status: {
        type: DataTypes.ENUM("to do", "doing", "done"),
        allowNull: false
    },
    link_airtable: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    link_github: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    }
};

// ? Create project table from model
const project = sequelize.define('project', projectModel)
// ################################ ##

module.exports = {project};
