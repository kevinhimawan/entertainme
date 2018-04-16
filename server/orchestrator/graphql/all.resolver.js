const axios = require('axios')
const resolvers = {
  Query: { 
    movies: async () => {
      try {
        const moviesData = await axios.get('http://localhost:3001/')
        if (moviesData) {
          return moviesData.data
        }
      }catch (err) {
        return err
      }
    },
    series: async () => {
      const seriesData = await axios.get('http://localhost:3002/')
      if (seriesData) {
        return seriesData.data
      } else {
        return `Error`
      }
    },
    getSpecificMovies: async(root, {_id}) => {
      try {
        const moviesDataSpec = await axios.get(`http://localhost:3001/${_id}`)
        if (moviesDataSpec) {
          return moviesDataSpec.data
        }
      }catch(err) {
        return `Error`
      }
    }
  },
  Mutation: {
    addMovies: async (root, data) => {
      const adding = await axios.post('http://localhost:3001/add', data)
      if (adding) {
        return adding.data.newData
      }
    }
  }
};

module.exports = resolvers