const express = require('express');
const { 
  getAllMovies, 
  getMovieById, 
  addMovie, 
  getMoviesByCategory, 
  rateMovie, 
  deleteMovie, 
  updateMovie 
} = require('../controllers/movieController');

const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

const router = express.Router();

router.get('/movies', getAllMovies);
router.get('/:id', getMovieById);
router.post('/addMovie', [authMiddleware, adminMiddleware], addMovie);
router.get('/category/:category', getMoviesByCategory);
router.put('/rate/:id', authMiddleware, adminMiddleware, rateMovie);
router.put('/:id', [authMiddleware, adminMiddleware], updateMovie); 
router.delete('/:title', [authMiddleware, adminMiddleware], deleteMovie);

module.exports = router;
