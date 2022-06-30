const route = require('express').Router();
const AuthController = require('../controllers/auth.controller');

route.post('/login', AuthController.login);
route.post('/registro', [AuthController.validateUserExists], AuthController.register);

module.exports = route;