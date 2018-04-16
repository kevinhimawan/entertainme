const Movies = require('../Model/Movies.Model')
const Tag = require('../Model/Tag.Model')

const getAllMovies = async (req, res) => {
  const allmovies = await Movies.find()
  if (allmovies) {
    res.status(200).json(allmovies)
  }
}

const addMovies = async (req, res) => {
  const { overview, title, poster_path, popularity } = req.body
  const newMovie = new Movies({
    overview, title, poster_path, popularity: Number(popularity)
  })
  try {
    const adding = await newMovie.save()
    if (adding) {
      const getMovie = await Movies.find()
      if (getMovie) {
        res.status(200).json({
          result: adding,
          newData: newMovie
        })
      } else {
        res.status(500).send('Error om')
      }
    } else {
      res.status(500).send('Error om')
    }
  } catch (err) {
    res.status(500).send('Error om')
  }
}

const addTag = async (req, res) => {
  const { name } = req.body
  const newTag = new Tag({
    name
  })
  try {
    const adding = await newTag.save()
    if (adding) {
      res.status(200).json(adding)
    } else {
      res.status(500).send('Error om')
    }
  } catch (err) {
    res.status(500).send('Error om')
  }
}

const inputTag = async (req, res) => {
  const {movie, tag} = req.body
  const editmovie = await Movies.update({_id: movie},{'$push':{tag: tag}})
  if (editmovie) {
    const getMovie = await Movies.find()
      if (getMovie) {
        res.status(200).json({
          result: editmovie,
          newData: getMovie
        })
      } else {
        res.status(500).send('Error om')
      }
  } else {
    res.status(500).send('Error om')
  }
}

const deleteMovie = async (req, res) => {
  const movieid = req.params.movieid
  try {
    const deleteMov = await Movies.remove({'_id': movieid})
    if (deleteMov) {
      const getMovie = await Movies.find()
      if (getMovie) {
        res.status(200).json({
          result: deleteMov,
          newData: getMovie
        })
      } else {
        res.status(500).send('Error om')
      }
    } else {
      res.status(500).json('Error om')  
    }
  } catch (err) {
    res.status(500).json('Error om')
  }
}

const getSpecific = async (req, res) => {
  const id = req.params.id
  try {
    const getSpec = await Movies.findOne({'_id': id})
    if (getSpec) {
      res.status(200).json(getSpec)
    }
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  getAllMovies,
  addMovies,
  addTag,
  inputTag,
  deleteMovie,
  getSpecific
}