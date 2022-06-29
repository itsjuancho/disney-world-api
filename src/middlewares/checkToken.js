const jwt = require("jsonwebtoken");

function checkToken(req, res, next) {
    if (!req.headers["auth-token"]) {
        res.status(400).json({
            message: "No existe un token de autorización en la solicitud que has realizado"
        });
    } else {
        next();
    }
}

function validateToken(req, res, next) {
    try {
        const token = req.headers["auth-token"];
        const decode = jwt.verify(token, process.env.SECRET_KEY);
        // req.user = decode;
        next();
    } catch (error) {
        res.status(401).json({
            message: "Token inválido y/o expirado."
        });
    }
}

module.exports = {checkToken, validateToken};