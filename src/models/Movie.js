const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class Movie extends Model {}

Movie.init({
    title: DataTypes.STRING,
    picture_url: DataTypes.STRING,
    score: DataTypes.INTEGER(1),
    genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo no puede ser nulo o vacío"
            },
            isInt: true
        }
    }
}, {
    sequelize,
    modelName: "movie"
});

module.exports = Movie;