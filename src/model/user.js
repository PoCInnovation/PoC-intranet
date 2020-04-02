const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize({
    dialect: "mariadb",
    storage: "db.mariadb"
});

// ############# Users ############# ##
// ? Define user model
const userModel = {
    user_id: {
        type: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4,
        allowNull: true,
        primaryKey: true
    },
    mail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    token: { // ! <-- Can change
        type: DataTypes.JSON,
        allowNull: false,
        unique: true
    }
};

// ? Create user table from model
const user = sequelize.define('user', userModel);
// ################################ ##

module.exports = {user};
