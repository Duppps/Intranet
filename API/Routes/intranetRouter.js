const express = require('express');
const router = express.Router();

const intranetController = require('../Controllers/intranetController');

router.get('/', intranetController.getAllData);

module.exports = router;