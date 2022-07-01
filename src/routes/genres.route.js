const route = require('express').Router();
const GenresController = require('../controllers/genres.controller');

route.get('/', GenresController.getAll);
route.post('/', GenresController.create);

module.exports = route;