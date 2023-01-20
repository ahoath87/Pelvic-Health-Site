require('dotenv').config();
const cors = require('cors');
const express = require('express');
const client = require('./db/client');
const app = express();
const morgan = require('morgan');
client.connect();
const api = require('./api');

// const router = require('./api');

// Setup your Middleware and API Router here
app.use(cors());

app.use(morgan('dev'));

app.use(express.json());

//  const apiRouter = require('/api');
//  app.use('/api', apiRouter);

app.use((req, res, next) => {
  console.log('<---BODY SNATCHER STARTS HERE--->');
  console.log(req.body);
  console.log('<---BODY SNATCHER ENDS HERE--->');

  next();
});

app.get('/', (req, res) => {
  res.send('Hello World from app.js!');
});

app.use('/api', api);

// Default error handler to handle anything that isn't 404;
app.use((error, req, res, next) => {
  console.error(error);
  res.send(error);
});

// catch all 404 error handler
app.get('*', (req, res) => {
  res.status(404).send('Oooooops! :/');
});

module.exports = {
  app,
};
