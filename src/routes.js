const router = require('express').Router();
const CharactersRoutes = require('./routes/characters.route');
const GenresRoutes = require('./routes/genres.route');
const MoviesRoutes = require('./routes/movies.route');
const AuthRoutes = require('./routes/auth.route');
const {checkToken, validateToken} = require('./middlewares/checkToken');

router.use(CharactersRoutes);
router.use(GenresRoutes);
router.use([checkToken, validateToken], MoviesRoutes);
router.use(AuthRoutes);

module.exports = router;