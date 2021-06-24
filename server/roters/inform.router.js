const { Router } = require('express');
const informRouter = Router();
const informController = require('../controllers/inform.controller');

informRouter.get(
  '/novetli',
  informController.fetchBooks.bind({ param: 'novetly' })
);

module.exports = informRouter;
