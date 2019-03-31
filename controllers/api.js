const { promisify } = require('util');
const request = require('request');

const bathroom = require('../models/Bathroom');


exports.find = (req, res) => {
  //console.log('test');
  //res.send('lat: ' + req.params.lat + ' long: ' + req.params.long);

  //pull everything within +-.30 degrees from lat and long 
  const arr = bathroom.find({});
  var bath = arr[0];
  res.send('bathroom: ' + bath);
};