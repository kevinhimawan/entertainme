const { makeExecutableSchema } = require('graphql-tools')
const getAll = require('./all.graphql')
const fs = require('fs')

const resolvers = require('./all.resolver')

const schema = makeExecutableSchema({
  typeDefs: getAll,
  resolvers,
});

module.exports = schema