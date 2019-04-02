const Bathroom = require('../models/Bathroom');

const Comment = require('../models/Comment');

/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};
exports.snap = (req, res) => {
res.redirect('https://accounts.snapchat.com/accounts/login?client_id=geo');};

exports.postComment = (req, res, next) => {
  const comment = new Comment({
    id: req.body.id,
    comment: req.body.comment,
  });
console.log(comment)
    comment.save((err) => {
      if (err) { return next(err); }
        res.redirect('/location/'+req.body.id);
        req.flash('success', { msg: 'Comment Added' });
      });
  }

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
  var quality = Math.round((parseInt(req.body.cleanliness) + parseInt(req.body.traffic) + parseInt(req.body.tp)) / 3);
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
    quality: quality,
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
<<<<<<< HEAD
      if (existingRecord){
      Comment.find({ id: req.params.id }, (err, comments) => {
=======
>>>>>>> parent of c16d34b... Merge branch 'master' of https://github.com/bennettwarner/FlushRush
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
        comments: comments,
      });
  
<<<<<<< HEAD
     } );
  }})};
=======
    });
  };
>>>>>>> parent of c16d34b... Merge branch 'master' of https://github.com/bennettwarner/FlushRush
  
  exports.getLocations = (req, res, next) => {
    Bathroom.find({}, (err, locations) => {
      console.log(locations);
      res.render('locations', {
        title: 'Locations',
        locations: locations
      });
  
    });
  };