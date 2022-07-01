const Genre = require("../models/Genre");
const Movie = require("../models/Movie");

const GenresController = {
    async create(req, res) {
        const { name, picture_url } = req.body;
        try {
            let genre = await Genre.create({
                name: name,
                picture_url: picture_url
            });
            console.log(genre);
            res.status(200).json(genre);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Error del servidor"
            });
        }
    },
    async getAll(req, res) {
        try {
            const genres = await Genre.findAll({
                attributes: { 
                    exclude: ["createdAt", "updatedAt"]
                }
            });
            res.status(200).json(genres);
        } catch (error) {
            console.log(error);
        }
    },
    async getMovies(req, res) {
        const {id} = req.params;
        try {
            // const genres = await Genre.findAll({
            //     include: {
            //         model: Movie,
            //         as: "movies",
            //         attributes: ['id', 'title']
            //     },
            //     attributes: ["name"]
            // });
            const data = await Genre.findByPk(id);
            const movies = await data.getMovies();
            res.status(200).json({
                genre: data.name,
                movies
            });
        } catch (error) {
            console.log(error);
        }
    },
};

module.exports = GenresController;