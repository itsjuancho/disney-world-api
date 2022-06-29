const Character = require("../models/Character");

let CharactersController = {
    async create(req, res) {
        try {
            let character = await Character.create({
                name: "Aladín",
                age: 15,
                picture_url: "http://img.disney.co/pudin/aladin",
                weight: 36.7,
                history: "Esta es la historia de cadasdinty"
            });
            res.status(200).json({
                message: "Create successfully!",
                character
            });
        } catch (e) {
            console.log(e);
            res.status(500).json({
                error: "Ups, pasó algo..."
            });
        }
    },
    async getAll(req, res) {
        try {
            const characters = await Character.findAll({
                attributes: ["id", "name", "picture_url"]
            });
            res.status(200).json({
                count: characters.length,
                characters
            });
        } catch (error) {
            console.log(error);
        }
    },
    async getById(req, res) {
        const { id } = req.params;
        try {
            const character = await Character.findOne({
                where: {
                    id: id
                },
                attributes: { 
                    exclude: ["createdAt", "updatedAt"]
                }
            });
            res.status(200).json(character);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Error del servidor"
            });
        }
    }
};

module.exports = CharactersController;