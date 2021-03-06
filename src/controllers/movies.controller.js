const Character = require("../models/Character");
const Genre = require("../models/Genre");
const Movie = require("../models/Movie");

const MoviesController = {
    async getAll(req, res) {
        try {
            let movies = await Movie.findAll({
                include: [{
                    model: Genre,
                    attributes: ['name']
                }, {
                    model: Character,
                    as: "characters",
                    attributes: ["name", "picture_url"],
                    through: {
                        attributes: []
                    }
                }],
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
        const {title, picture_url, score, genre_id, characters} = req.body;
        try {
            let movie = await Movie.create({
                title: title,
                picture_url: picture_url,
                score: +score,
                genre_id: +genre_id
            });
            if (characters) {
                movie.setCharacters(characters);
            }
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
        const { id } = req.params;
        try {
            let movie = await Movie.findByPk(id, {
                include: [{
                    model: Genre,
                    attributes: ['name']
                }, 
                {
                    model: Character,
                    as: "characters",
                    attributes: ["name", "picture_url"],
                    through: {
                        attributes: []
                    }
                }],
                attributes: {
                    exclude: ["genre_id", "createdAt", "updatedAt"]
                }
            });
            if (movie) {
                res.status(200).json(movies);
            } else {
                res.status(404).json({
                    message: "Película no encontrada"
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Ocurrió un error"
            })
        }
    },
    async update(req, res) {
        const { title, picture_url, score, genre_id, characters } = req.body;
        const { id } = req.params;
        try {
            let movie = await Movie.findByPk(id);
            if (!movie) {
                return res.status(404).json({
                    message: "Película no encontrada"
                });
            }
            let updatedMovie = await movie.update({
                title: title,
                picture_url: picture_url,
                score: score,
                genre_id: genre_id
            });
            updatedMovie.setCharacters(characters);
            res.status(200).json({
                message: "Película actualizada con éxito",
                movie
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Ocurrió un error"
            });
        }
    }
}

module.exports = MoviesController;