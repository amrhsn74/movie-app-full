const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  _id: { type: String },
  user_id: { type: String, ref: "User", required: true },
  movie_id: { type: String, ref: "Movie", required: true },
  rating: { type: Number, min: 1, max: 5 },
  review: String
});

module.exports = mongoose.model("Rating", ratingSchema);
