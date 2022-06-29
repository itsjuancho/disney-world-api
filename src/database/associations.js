const Character = require("../models/Character");
const Genre = require("../models/Genre");
const Movie = require("../models/Movie");

// 1aN
Genre.hasMany(Movie, { as: "movies", foreignKey: "genre_id" });
Movie.belongsTo(Genre, { foreignKey: "genre_id" });

// NaN
Character.belongsToMany(Movie, { through: "character_has_film" });
Movie.belongsToMany(Character, { through: "character_has_film" });