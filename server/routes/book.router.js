const express = require('express');
const controller = require('../controllers/book.controller');
const router = express.Router();

router.get('/:_brand/:_model', controller.fetchModels);
router.get('/:_brand/:_model/:_book', controller.fetchBook);

module.exports = router;
