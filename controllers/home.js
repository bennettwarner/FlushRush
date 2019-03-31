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
exports.add = (req, res) => {
  res.render('add', {
    title: 'Add a Flush'
  });
};
