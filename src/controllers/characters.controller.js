const Character = require("../models/Character");

let CharactersController = {
    async create(req, res) {
        const { name, age, picture_url, weight, history } = req.body;
        try {
            let character = await Character.create({
                name: name,
                age: +age,
                picture_url: picture_url,
                weight: weight,
                history: history
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
            if (character) {
                res.status(200).json(character);
            } else {
                res.status(404).json({
                    message: "Este personaje no existe"
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Error del servidor"
            });
        }
    },
    async update(req, res) {
        const { id } = req.params;
        const { name, age, picture_url, weight, history } = req.body;

        try {
            let [character] = await Character.update({
                name: name,
                age: +age,
                picture_url: picture_url,
                weight: weight,
                history: history
            }, {
                where: {
                    id: id
                }
            });
            if (character) {
                res.status(204).json({
                    message: "El personaje fue actualizado con éxito"
                });
            } else {
                res.status(400).json({
                    message: "El personaje no pudo ser actualizado"
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Ha ocurrido un error a la hora de actualizar"
            });
        }
    },
    async delete(req, res) {
        const { id } = req.params;

        try {
            let deletedCharacter = await Character.destroy({
                where: {
                    id: id
                }
            });
            if (deletedCharacter) {
                res.status(200).json({
                    message: "Personaje eliminado correctamente"
                });
            } else {
                res.status(200).json({
                    message: "El personaje no se pudo eliminar"
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Ha ocurrido un error a la hora de eliminar el personaje"
            });
        }
    }
};

module.exports = CharactersController;