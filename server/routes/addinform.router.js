const { Router } = require('express');
const controller = require('../controllers/addinform.controller');
const router = Router();

router.use('/', controller.fetchBooks);

module.exports = router;
