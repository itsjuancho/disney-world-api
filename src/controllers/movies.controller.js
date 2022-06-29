const Genre = require("../models/Genre");
const Movie = require("../models/Movie");

const MoviesController = {
    async getAll(req, res) {
        try {
            let movies = await Movie.findAll({
                include: {
                    model: Genre,
                    attributes: ['name']
                },
                attributes: {
                    exclude: ["genre_id", "createdAt", "updatedAt"]
                }
            });
            res.status(200).json(movies);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Ocurrió un error"
            })
        }
    },
    async create(req, res) {
        try {
            let movie = await Movie.create({
                title: "WestCol y Roncandro",
                picture_url: "twitch.com/westcol",
                score: 1,
                genre_id: 2
            });
            res.status(200).json({
                message: "The movie's created successfully!",
                movie
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Ocurrió un error"
            })
        }
    },
    async getById(req, res) {
        try {
            let movies = await Movie.findAll({
                include: {
                    model: Genre,
                    attributes: ['name']
                },
                attributes: {
                    exclude: ["genre_id", "createdAt", "updatedAt"]
                }
            });
            res.status(200).json(movies);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Ocurrió un error"
            })
        }
    }
}

module.exports = MoviesController;