const express = require('express');
const router = express.Router();

const vagasController = require('../Controllers/vagasController');

router.get('/', vagasController.getVagas);

module.exports = router;