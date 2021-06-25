const express = require('express');
const bodyParser = require('body-parser');
const informRoutes = require('./routes/addinform.router');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3002;

app.use((req, res, next) => {
  req.condition = 'novetly';
  next();
});
app.use('/api/addinform', informRoutes);

const server = app.listen(port, error => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server listening on port ${server.address().port}`);
});

module.exports = app;
