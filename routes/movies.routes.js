const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movies.controller');

// TODO: list movies route

router.get('/', moviesController.list);
// TODO: movie detail route
router.get('/:id', moviesController.detail)

module.exports = router;
