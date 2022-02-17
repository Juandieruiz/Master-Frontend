'use strict';

const express = require('express');
let ArticleController = require('../controllers/article');

let router = express.Router();

const multipart = require('connect-multiparty');
const md_upload = multipart({ uploadDir: './upload/articles' });

// rutas de prueba

router.post('/datos-curso', ArticleController.datosCurso);
router.get('/test-de-controlador', ArticleController.prueba);

// rutas útiles
router.post('/save', ArticleController.save);
router.get('/articles/:dataUrl?', ArticleController.getArticles);
router.get('/article/:id', ArticleController.getArticle);
router.put('/article/:id', ArticleController.update);
router.delete('/article/:id/', ArticleController.delete);
router.post('/upload-image/:id',md_upload, ArticleController.upload);
router.get('/get-image/:image', ArticleController.getImage);
router.get('/search/:search', ArticleController.search)

module.exports = router;