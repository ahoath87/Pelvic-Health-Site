const express = require('express');
const { app } = require('./app');
const chalk = require('chalk');
// const client = require('./db/client');
// const apiRouter = require('./api');

const PORT = 5000;
// const server = http.createServer(app);

app.listen(PORT, () => {
  console.log(
    chalk.blueBright('Server is listening on PORT:'),
    chalk.yellow(PORT),
    chalk.blueBright('lets get to work!')
  );
});
