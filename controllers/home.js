const Bathroom = require('../models/Bathroom');


/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

/**
 * GET /
 * Add.
 */
exports.getAdd = (req, res) => {
  res.render('add', {
    title: 'Add a Flush'
  });
};

exports.postAdd = (req, res, next) => {
  var papertowels;
  var toiletpaper;

  if (req.body.papertowels == null){
    papertowels = false;
  } else{
    papertowels = true;
  }

  if (req.body.toiletpaper == null){
    toiletpaper = false;
  } else{
    toiletpaper = true;
  }
  const bathroom = new Bathroom({
    id: parseInt((new Date).getTime()),
    name: req.body.name,
    location: req.body.location,
    latitude: req.body.lat,
    longitude: req.body.lon,
    gender: req.body.gender,
    cleanliness: req.body.cleanliness,
    traffic: req.body.traffic,
    tpQuality: req.body.tp,
    paperTowels: papertowels,
    toiletPaper: toiletpaper,
  });
console.log(bathroom)
  Bathroom.findOne({ name: req.body.name }, (err, existingRecord) => {
    if (err) { return next(err); }
    if (existingRecord) {
      req.flash('errors', { msg: 'This location already exists.' });
      return res.redirect('/add');
    }
    bathroom.save((err) => {
      if (err) { return next(err); }
        res.redirect('/add');
        req.flash('success', { msg: 'Location Added' });
      });
    });
  }

  exports.getLocation = (req, res, next) => {
    Bathroom.findOne({ id: req.params.id }, (err, existingRecord) => {
      console.log(existingRecord);
      var name = existingRecord.name;
      var location = existingRecord.location;
      var lat = existingRecord.latitude;
      var lon = existingRecord.longitude;
      var gender = existingRecord.gender;
      var cleanliness = existingRecord.cleanliness;
      var traffic = existingRecord.traffic;
      var tpQuality = existingRecord.tpQuality;
      var paperTowels = existingRecord.paperTowels;
      var toiletPaper = existingRecord.toiletPaper;
      var added = existingRecord.createdAt;
      var map = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyAumXpydW7Mo9r5QMTUqdWkPXcLNysTZyg\
      &q='+ lat + ',' + lon;
      res.render('location', {
        title: name,
        name: name,
        location: location,
        map: map,
        gender: gender,
        cleanliness: cleanliness,
        traffic: traffic,
        tpQuality: tpQuality,
        paperTowels: paperTowels,
        toiletPaper: toiletPaper,
        added: added,
      });
  
    });
  };
  