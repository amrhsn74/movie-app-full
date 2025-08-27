const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  _id: { type: String },  // <-- force string IDs
  title: { type: String, required: true },
  year: Number,
  genres: [String],
  overview: String,
  poster: String,
  rating: Number,
  //actors: [{ type: String, ref: "Actor" }]
});

module.exports = mongoose.model("Movie", movieSchema);
