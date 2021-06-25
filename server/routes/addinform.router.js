const { Router } = require('express');
const controller = require('../controllers/addinform.controller');
const router = Router();

router.get('/novetly', controller.fetchBooks);

module.exports = router;
