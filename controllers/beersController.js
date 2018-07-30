var Beer = require('../models/beer');
var Bar = require('../models/bar');

module.exports = {
    index,
    show,
    new:  newBeer,
    delete: deleteBeer,
    create
};


function index(req, res) {
    Beer.find({}, (err, beers) => {
      res.render('beers/index', {pageTitle: 'BEER LIST', beers});
    });
  }

function show(res, req) {
    res.render('beers/show');
};


function newBeer(res, req) {
    res.render('beers/new');
};

function deleteBeer(res, req) {
    res.redirect('beers/index');
};

function create(res, req) {
    res.render('beers/create');
};