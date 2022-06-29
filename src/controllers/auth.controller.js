const User = require("../models/User");

const AuthController = {
    login(req, res) {

    },
    register(req, res) {
        res.status(200).json({
            msg: "registrado con éxito"
        })
    },
    validateUserExists(req, res, next) {
        if (!req.body.username) {
            res.status(401).json({
                error: "Revisa tus credenciales"
            });
        } else {
            console.log("Hola soy el middleware :P");
            next();
        }
    }
};

module.exports = AuthController;