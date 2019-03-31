const mongoose = require('mongoose');

const bathroomSchema = new mongoose.Schema({
  name: String,
  location: String,
  latitude: String,
  longitude: String,
  gender: String,
  cleanliness: Number,
  traffic: Number,
  tpQuality: String,

  features: {
    paperTowels: String,
    toiletPaper: String,
  }
}, { timestamps: true });

const User = mongoose.model('Bathroom', bathroomSchema);

module.exports = Bathroom;
