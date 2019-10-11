var express = require('express');
var router = express.Router();
var Book = require('../models/Book.js');

/* GET Student Details */
router.get('/:id', function (req, res, next) {
  Book.find({ "uName": req.params.id }, function (err, post) {
    console.log("I am in Routes")
    console.log(req.params.id);
    if (err) return next(err);
    res.json(post);
  });
});

/* Student Registration */
router.post('/', function (req, res, next) {
  Book.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Add Student Details */
router.post('/check/:id', function (req, res, next) {
  Book.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Update Student Details */
router.put('/:id', function (req, res, next) {
  console.log("body------------",req.body);
  var myquery = {uName: req.params.id};
  var newvalues = { $set: req.body };
  Book.updateOne(myquery, newvalues, function (err, post) {
    if (err)  {console.error(err);return next(err)}
    res.json(post);
  });

});

module.exports = router;
