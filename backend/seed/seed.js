const mongoose = require("mongoose");
require("dotenv").config();

const Movie = require("../models/Movie");
// const Actor = require("../models/Actor");
const User = require("../models/User");
const Rating = require("../models/Rating");

const movies = require("../seed/movies.json");
// const actors = require("../seed/actors.json");
const users = require("../seed/users.json");
const ratings = require("../seed/ratings.json");

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // Clear old data
    await Promise.all([
      Movie.deleteMany(),
      // Actor.deleteMany(),
      User.deleteMany(),
      Rating.deleteMany(),
    ]);

    // Insert fresh data
    await Promise.all([
      Movie.insertMany(movies),
      // Actor.insertMany(actors),
      User.insertMany(users),
      Rating.insertMany(ratings),
    ]);

    console.log("🌱 Database seeded successfully!");
  } catch (err) {
    console.error("❌ Error while seeding:", err);
  } finally {
    await mongoose.disconnect();
    process.exit();
  }
}

seedDB();
