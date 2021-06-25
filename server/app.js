const express = require('express');
const app = express();
const port = 3002;
const bodyParser = require('body-parser');
const informRoutes = require('./routes/addinform.router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(port, error => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server listening on port ${server.address().port}`);
});

app.use((req, res, next) => {
  req.condition = 'novetly';
  next();
});
app.use('/addinform/novetly', informRoutes);

module.exports = app;
