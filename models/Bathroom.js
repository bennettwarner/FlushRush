const mongoose = require('mongoose');

const bathroomSchema = new mongoose.Schema({
  id: Number,
  name: String,
  location: String,
  latitude: String,
  longitude: String,
  gender: String,
  cleanliness: Number,
  traffic: Number,
  tpQuality: Number,
  quality: Number,
  paperTowels: String,
  toiletPaper: String,

}, { timestamps: true });

const Bathroom = mongoose.model('Bathroom', bathroomSchema);

module.exports = Bathroom;
