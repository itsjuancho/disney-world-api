const User = require("../models/User");
const Op = require('sequelize').Op;
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const sendMail = require('../utils/sendEmail');

const AuthController = {
    async login(req, res) {
        const { email, password } = req.body;

        try {
            let user = await User.findOne({
                where: {
                   email: email
                }
            });
            if (!user) return res.status(404).json({ message: "Usuario no encontrado" });

            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) return res.status(404).json({ message: "Contraseña inválida, revisa tus credenciales." });

            const token = jwt.sign({
                username: user.username,
                id: user.id,
                email: user.email
            }, process.env.SECRET_KEY);

            res.header('auth-token', token).status(200).json({
                message: "Logueado con éxito",
                token: token
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Ocurrió un error en el servidor"
            });
        }
    },
    async register(req, res) {
        const { username, email, password } = req.body;

        try {
            const salt = await bcrypt.genSalt(10);
            const passwordHashed = await bcrypt.hash(password, salt);
            const user = await User.create({
                username: username,
                email: email,
                password: passwordHashed
            });
            const resultSendEmail = await sendMail(user.email, user.username);
            res.status(201).json({
                message: "Registrado correctamente. " + (resultSendEmail ? "Hemos enviado un correo de bienvenida a tu email" : "Sin embargo, tuvimos un fallo para enviarte el correo de bienvenida a tu email...")
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Ocurrió un error en el servidor"
            });
        }
    },
    async validateUserExists(req, res, next) {
        console.log("Verificando existencia de usuario...");
        let userExists = await User.findOne({
            where: {
                [Op.or]: [
                    { username: req.body.username },
                    { email: req.body.email }
                ]
            }
        });
        if (userExists) {
            res.status(200).json({
                message: "El correo o el nombre de usuario que intentas usar, ya se encuentran en uso. Elige otros."
            });
        } else {
            next();
        }
    }
};

module.exports = AuthController;