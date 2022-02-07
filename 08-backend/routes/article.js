'use strict';

const express = require('express');
let ArticleController = require('../controllers/article');

let router = express.Router();

router.post('/datos-curso', ArticleController.datosCurso);
router.get('/test-de-controlador', ArticleController.prueba);

module.exports = router;