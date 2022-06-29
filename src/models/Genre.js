const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class Genre extends Model {}

Genre.init({
    name: DataTypes.STRING,
    picture_url: DataTypes.STRING
}, {
    sequelize,
    modelName: "genre"
});

module.exports = Genre;