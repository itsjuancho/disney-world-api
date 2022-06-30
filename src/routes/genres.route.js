const route = require('express').Router();
const GenresController = require('../controllers/genres.controller');

route.get('/getAll', GenresController.getAll);
route.get('/:id/getMovies', GenresController.getMovies);
route.get('/genres', GenresController.get);

module.exports = route;