const { Router } = require('express');
const controller = require('../controllers/addinform.controller');
const router = Router();

router.get('/novetly', controller.fetchNovetly);
// router.get('/bestsellers', controller.fetchBestsellers);

module.exports = router;
