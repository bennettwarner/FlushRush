const Bathroom = require('../models/Bathroom');


exports.find = (req, res, next) => {
  Bathroom.find({}, (err, locations) => {
    console.log(locations);
    res.render('find', {
      google_map_api_key: process.env.GOOGLE_MAP_API_KEY,
      title: 'Find',
      locations: locations
    });

  });

};

exports.getGoogleMaps = (req, res) => {
  res.render('api/google-maps', {
    title: 'Google Maps API',
    google_map_api_key: process.env.GOOGLE_MAP_API_KEY
  });
};
