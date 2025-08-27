const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Movie = require('../models/Movie');

// ✅ GET all movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ GET single movie by ID
router.get('/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ GET movie recommendations by ID
router.get('/:id/recommendations', async (req, res) => {
  try {
const movie = await Movie.findOne({ movieId: id });

    // ✅ Validate ID before using it
    if (!mongoose.Types.ObjectId.isValid(movieId)) {
      return res.status(400).json({ message: 'Invalid movie ID' });
    }

    // ✅ Get 5 random movies except the current one
const recommendations = await Movie.aggregate([
  { $match: { movieId: { $ne: movieId } } }, // Use custom movieId field
  { $sample: { size: 5 } }
]);


    res.json(recommendations);
  } catch (err) {
    console.error('Error fetching recommendations:', err);
    res.status(500).json({ message: 'Failed to fetch recommendations' });
  }
});

module.exports = router;
