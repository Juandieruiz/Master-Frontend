'use strict';

const express = require('express');
let ArticleController = require('../controllers/article');

let router = express.Router();

// rutas de prueba

router.post('/datos-curso', ArticleController.datosCurso);
router.get('/test-de-controlador', ArticleController.prueba);

// rutas para articulos
router.post('/save', ArticleController.save);



module.exports = router;