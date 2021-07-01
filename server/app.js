const express = require('express');
const bodyParser = require('body-parser');
const addinformRoutes = require('./routes/addinform.router');

const app = express();

const port = 3002;

const server = app.listen(port, error => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server listening on port ${server.address().port}`);
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/addinform', addinformRoutes);

module.exports = app;
