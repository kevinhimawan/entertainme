const express = require('express'),
      router = express.Router();

const { getAllMovies, addMovies, addTag, inputTag, deleteMovie, getSpecific } = require('../Controller/index.controller')

/* GET home page. */
router.get('/', getAllMovies)
router.post('/add', addMovies)
router.post('/addtag', addTag)
router.put('/inputtag', inputTag)
router.delete('/deletmov/:movieid', deleteMovie)
router.get('/:id', getSpecific)

module.exports = router;
