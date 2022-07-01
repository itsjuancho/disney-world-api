const route = require('express').Router();
const MoviesController = require('../controllers/movies.controller');

route.post('/', MoviesController.create);
route.get('/', MoviesController.getAll);
route.get('/:id', MoviesController.getById);
route.put('/:id', MoviesController.update);

module.exports = route;