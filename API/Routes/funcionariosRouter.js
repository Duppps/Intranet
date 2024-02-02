const express = require('express');
const router = express.Router();

const funcionariosController = require('../Controllers/funcionariosController');

router.get('/aniversariantes', funcionariosController.getAniversariantes);

router.get('/proxAniversariantes', funcionariosController.getProxAniversariantes);

module.exports = router;