const route = require('express').Router();
const CharactersController = require('../controllers/characters.controller');

route.post('/', CharactersController.create);
route.get('/', CharactersController.getAll);

module.exports = route;