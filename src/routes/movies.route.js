const route = require('express').Router();
const MoviesController = require('../controllers/movies.controller');

route.post('/', MoviesController.create);
route.get('/', MoviesController.getAll);
route.get('/:id', MoviesController.getById);

module.exports = route;