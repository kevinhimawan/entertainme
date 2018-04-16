const getAll = ` 
type Query { 
  movies: [Movie],
  series: [Series],
  getSpecificMovies(_id: String): Movie
}

type Mutation {
  addMovies(
    title:String, 
    popularity: Int,
    overview: String, 
    poster_path: String):  addMovie
}

type addMovie {
  title: String,
  popularity: Int
}

type Movie { 
  poster_path: String,
  overview: String,
  title: String,
  popularity: Int,
  tag: [String],
  _id: String
}

type Series {
  name: String
}`
module.exports = getAll

