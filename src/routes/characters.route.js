const route = require('express').Router();
const CharactersController = require('../controllers/characters.controller');

route.post('/characters', CharactersController.create);
route.get('/characters', CharactersController.getAll);

module.exports = route;