const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const initialData = require("./seed.json");

const MovieSchema = new Schema({
  name: String,
  year: Number,
  poster: String,
  watchlist: Boolean,
});
const movieModel = mongoose.model("movieModel", MovieSchema);

async function seedDataBase() {
  await movieModel.deleteMany();
  movieModel.create(initialData);
}

async function main() {
  await mongoose.connect("mongodb+srv://RaresButuc:vITYHVc1eXPmfdCM@clusterraresbutuc.9unmpzm.mongodb.net/");
  await seedDataBase();
}

module.exports = movieModel;
main();
