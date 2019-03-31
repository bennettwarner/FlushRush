const { promisify } = require('util');
const request = require('request');

/**
 * GET /api
 * List of API examples.
 */
exports.getApi = (req, res) => {
  res.render('api/index', {
    title: 'API Examples'
  });
};

exports.getGoogleMaps = (req, res) => {
  res.render('api/google-maps', {
    title: 'Google Maps API',
    google_map_api_key: process.env.GOOGLE_MAP_API_KEY
  });
};

exports.find = (req, res) => {
  console.log('test');
  res.send('lat: ' + req.params.lat + ' long: ' + req.params.long);
};