var Bar = require('../models/bar');
var Beer = require('../models/beer');


module.exports = {
    index,
    show,
    delete: deleteBar,
    new: newBar,
    create,
}

function index(req, res) {
  Bar.find({}, (err, bars) => {
    res.render('bars/index', {pageTitle: 'BAR LIST', bars});
  });
}

function show(req, res) {
  Bar.findById(req.params.id).populate('beers').exec((err, bar) => {
    res.render('bars/show', {pageTitle: 'BAR: ' + bar.name, bar});
  });
}

function deleteBar(req, res) {
  Bar.findById(req.params.id, (err, bar) => {
    bar.remove();
    res.redirect('/bars');
  });
}


function newBar(req, res) {
  res.render('bars/new', {pageTitle: 'NEW BAR'});
}

function create(req, res) {
  var bar = new Bar(req.body);
  bar.save(err => {
    res.redirect(`/bars/${bar.id}`);
  });
}
