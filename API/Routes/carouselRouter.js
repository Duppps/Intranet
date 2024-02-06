const express = require('express');
const router = express.Router();

const carouselController = require('../Controllers/carouselController');

router.get('/ativos', carouselController.getCarouselAtivos);

module.exports = router;