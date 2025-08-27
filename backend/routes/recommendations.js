const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// ✅ Get recommendations based on movie genre
router.get('/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });

    // Find similar movies with same genre but different ID
    const recommendations = await Movie.find({
      _id: { $ne: movie._id },
      genre: { $in: movie.genre }
    }).limit(6);

    res.json(recommendations);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
