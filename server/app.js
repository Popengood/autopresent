// const bluebird = require('bluebird');
const express = require('express');
const port = 3002;
const bodyParser = require('body-parser');
const config = require('../server/config.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(port, error => {
  if (error) return console.log(`Error: ${error}`);

  console.log(`Server listening on port ${server.address().port}`);
});

module.exports = app;
