const router = require('express').Router();
const CharactersRoutes = require('./routes/characters.route');
const GenresRoutes = require('./routes/genres.route');
const MoviesRoutes = require('./routes/movies.route');
const AuthRoutes = require('./routes/auth.route');

router.use(CharactersRoutes);
router.use(GenresRoutes);
router.use(MoviesRoutes);
router.use(AuthRoutes);

module.exports = router;