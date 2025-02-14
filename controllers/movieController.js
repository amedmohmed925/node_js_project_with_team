
const Movie = require('../models/Movie');


exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.addMovie = async (req, res) => {
  try {
    const { title, category, rating } = req.body;
    const newMovie = new Movie({ title, category, rating });
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getMoviesByCategory = async (req, res) => {
  try {
    const movies = await Movie.find({ category: req.params.category });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.rateMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });

    const { rating } = req.body;
    movie.rating = rating;
    await movie.save();
    res.json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a movie by title
exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findOneAndDelete({ title: req.params.title });
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.json({ message: 'Movie deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
