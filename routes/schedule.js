const controllers = require('../controllers');

const express = require('express');
const router = express.Router();

router.post('/', controllers.schedule);

module.exports = router;