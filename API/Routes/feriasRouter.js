const express = require('express');
const router = express.Router();

const feriasController = require('../Controllers/feriasController');

router.get('/feriantes', feriasController.getFeriantes);

module.exports = router;