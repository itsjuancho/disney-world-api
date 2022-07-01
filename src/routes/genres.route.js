const route = require('express').Router();
const GenresController = require('../controllers/genres.controller');

route.get('/', GenresController.getAll);

module.exports = route;