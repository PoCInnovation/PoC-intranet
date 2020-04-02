const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize({
    dialect: "mariadb",
    storage: "db.mariadb"
});

// ############# Join table ############# ##
// ? Join table between user and project
const fkUserProject = sequelize.define('fkUserProject', {
   fk_user_id: {
       type: DataTypes.UUIDV4,
       unique: true,
       foreignKey: 'user'
   },
    fk_project_id: {
        type: DataTypes.UUIDV4,
        unique: true,
        foreignKey: 'project'
    }
});

// ? Join table between user and roles
const fkUserRole = sequelize.define('fkUserRole', {
    fk_user_id: {
        type: DataTypes.UUIDV4,
        unique: true,
        foreignKey: 'user'
    },
    fk_project_id: {
        type: DataTypes.UUIDV4,
        unique: true,
        foreignKey: 'role'
    }
});
// ################################ ##

module.exports = {fkUserProject, fkUserRole};
