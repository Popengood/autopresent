const express = require('express');
const bodyParser = require('body-parser');
const addinformRoutes = require('./routes/addinform.router');

const app = express();

const port = 3002;

app.use('/api/addinform', addinformRoutes);

const server = app.listen(port, error => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server listening on port ${server.address().port}`);
});

module.exports = app;
