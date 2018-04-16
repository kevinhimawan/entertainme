const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const redis = require('redis');
const client = redis.createClient()
const bodyParser = require('body-parser')
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express')
const schema = require('./graphql/index')
const cors = require('cors')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
// app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
client.on('connect', () => {
  console.log('redis connected!'); 
})
const indexRouter = require('./routes/index');

app.use('/', indexRouter);

module.exports = app;
