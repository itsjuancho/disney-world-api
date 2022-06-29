const route = require('express').Router();
const GenresController = require('../controllers/genres.controller');

route.get('/genres/getAll', GenresController.getAll);
route.get('/genres/:id/getMovies', GenresController.getMovies);
route.get('/genres', GenresController.get);

module.exports = route;