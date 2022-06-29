const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class User extends Model {}

User.init({
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING(256),
        allowNull: false
    }
}, {
    sequelize,
    modelName: "user"
});

module.exports = User;