const express = require('express');
const controller = require('../controllers/addinform.controller');
const router = express.Router();

router.get('/novetly', controller.fetchNovetly);
router.get('/bestsellers', controller.fetchBestsellers);
router.get('/latest', controller.fetchLatest);

module.exports = router;
