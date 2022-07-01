const route = require('express').Router();
const CharactersController = require('../controllers/characters.controller');

route.post('/', CharactersController.create);
route.get('/', CharactersController.getAll);
route.get('/:id', CharactersController.getById);
route.put('/:id', CharactersController.update);
route.delete('/:id', CharactersController.delete);

module.exports = route;