const express = require('express');
const router = express.Router();

const funcionariosController = require('../Controllers/funcionariosController');

router.get('/aniversariantes', funcionariosController.getAniversariantes);

router.get('/proxAniversariantes', funcionariosController.getProxAniversariantes);

router.get('/tempoEmpresa', funcionariosController.getTempoEmpresa);

router.get('/admitidos', funcionariosController.getAdmitidos);

router.get('/desligados', funcionariosController.getDesligados);

router.get('/administrativo', funcionariosController.getAdministrativo);

module.exports = router;