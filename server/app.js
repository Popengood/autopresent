const express = require('express');
const addinformRoutes = require('./routes/addinform.router');
const bookRoutes = require('./routes/book.router');

const app = express();

const port = 3002;

const server = app.listen(port, error => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server listening on port ${server.address().port}`);
});

app.use('/api/addinform', addinformRoutes);
app.use('/api/book', bookRoutes);

module.exports = app;
