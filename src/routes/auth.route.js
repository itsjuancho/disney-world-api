const route = require('express').Router();
const AuthController = require('../controllers/auth.controller');

route.post('/auth/login', AuthController.login);
route.post('/auth/registro', [AuthController.validateUserExists], AuthController.register);

module.exports = route;