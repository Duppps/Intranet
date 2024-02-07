const express = require('express');
const router = express.Router();
const path = require('path');

const carouselController = require('../Controllers/carouselController');

router.get('/ativos', carouselController.getCarouselAtivos);

module.exports = router;