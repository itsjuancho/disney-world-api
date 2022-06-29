const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class Character extends Model {}

Character.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER(2),
    picture_url: DataTypes.STRING(145),
    weight: DataTypes.DECIMAL(3, 1),
    history: DataTypes.TEXT
}, {
    sequelize,
    modelName: "character"
});

module.exports = Character;