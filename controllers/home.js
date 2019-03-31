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
    });
    res.render('location', {
      title: existingRecord.name,
      name: existingRecord.name,
      location: existingRecord.location,
      latitude: existingRecord.lat,
      longitude: existingRecord.lon,
      gender: existingRecord.gender,
      cleanliness: existingRecord.cleanliness,
      traffic: existingRecord.traffic,
      tpQuality: existingRecord.tpQuality,
      paperTowels: existingRecord.paperTowels,
      toiletPaper: existingRecord.toiletPaper,
      added: existingRecord.createdAt,
    });
  };
  