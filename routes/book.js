var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('../models/Book');

/* GET All Books */
router.get('/', function(req, res, next) {
  // res.json('Show the all Book')
  Book.find(function (err, products){
    if(err) return next(err);
    res.json(products);
  })
});

/* GET Single Book By Id */
router.get('/:id', function(req, res, next){
  Book.findById(req.params.id, function(err, post){
    if(err) return next(err); 
    res.json(post)
  })
})

/* SAVE Book */
router.post('/', function(req, res, next){
  Book.create(req.body, function(err, post){
    if(err) return next(err);
    res.json(post);
  })
})

/* UPDATE Book */
router.put('/:id', function(req, res, next){
  Book.findById(req.params.id, function(err, post){
    if(err) return next(err);
    res.json(post);
  })
})

/* DELETE Book */
router.delete('/', function(req, res, next){
  Book.findByIdAndRemove(req.params.id, function(err, post){
    if(err) return next(err);
    res.json(post)
  })
})


module.exports = router;