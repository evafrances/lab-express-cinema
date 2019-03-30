const createError = require('http-errors');
const mongoose = require('mongoose')

const Movie = require('../models/movie.model')

module.exports.list = (req, res, next) => {
  Movie.find()
    .then(movies => {
      // console.log(movies);
      res.render('movies/list', {movies})}
    )
    .catch(error => next(error)) //esto primero. 
}
// TODO: movie detail action
module.exports.detail = (req, res, next) =>{
  const id = req.params.id;
  Movie.findById(id)
  .then(movies => {
    console.log(movies)
    if(movies){
      res.render('movies/detail', {movies})
    } else {
      next(createError(404, 'Movie dont found'))
    }
  })
  .catch(error => next(error)) //esto primero. 
} 


module.exports.list = (req, res, next) => {
  const title = {};
  const criteria
  criteria.title = new RegExp(req.query.title, 'i');
  criteria.description = new RegExp(req.query.description, 'i'); 

Movie.find({$or:[
  {title},
  {}
]})

  Movie.find(criteria)
    .then(movies => res.render('movies/list', { 
      movies, 
      title: req.query.title,
      description:  req.query.description
    }))
    .catch(error => next(error));
}