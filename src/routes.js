const router = require('express').Router();
const CharactersRoutes = require('./routes/characters.route');
const GenresRoutes = require('./routes/genres.route');
const MoviesRoutes = require('./routes/movies.route');
const AuthRoutes = require('./routes/auth.route');
const {checkToken, validateToken} = require('./middlewares/checkToken');

router.use("/characters", [checkToken, validateToken], CharactersRoutes);
router.use("/genres", [checkToken, validateToken], GenresRoutes);
router.use("/movies", [checkToken, validateToken], MoviesRoutes);
router.use("/auth", AuthRoutes);

module.exports = router;