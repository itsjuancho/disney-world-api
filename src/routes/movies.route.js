const route = require('express').Router();
const MoviesController = require('../controllers/movies.controller');

route.get('/movies', MoviesController.getAll);
route.get('/movies/create', MoviesController.create);

module.exports = route;