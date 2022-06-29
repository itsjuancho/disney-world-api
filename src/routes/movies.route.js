const route = require('express').Router();
const MoviesController = require('../controllers/movies.controller');

route.post('/movies', MoviesController.create);
route.get('/movies', MoviesController.getAll);
route.get('/movies/:id', MoviesController.getById);

module.exports = route;