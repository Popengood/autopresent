const express = require('express');
const controller = require('../controllers/book.controller');
const router = express.Router();

router.get('/:_brand/:_model', controller.fetchModels);

module.exports = router;
