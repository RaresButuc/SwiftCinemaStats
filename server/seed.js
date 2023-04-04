const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const initialData = require("./seed.json");

const MovieSchema = new Schema({
  name: String,
  year: Number,
  poster: String,
  watchlist: Boolean,
});
const movieModel = mongoose.model("Movie", MovieSchema);

async function seedDataBase() {
  await movieModel.deleteMany();
  movieModel.create(initialData);
}

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/myapp");
  await seedDataBase();
}

module.exports = movieModel;
main();
