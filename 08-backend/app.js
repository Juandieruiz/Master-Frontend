'use strict';

// Cargar modulos de node para crear el servidor
const express = require('express'); // Servidor Express
const bodyParser = require('body-parser'); // Middleware para leer el body de los formularios

// Ejecutar express (http)
const app = express();

// Cargar ficheros rutas
const article_routes = require('./routes/article');

// Middlewares (funciones que se ejecutan antes de llegar a las rutas)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS

// Añadir prefijos a rutas / Cargar rutas
app.use('/api',article_routes);


// Exportar modulo (fichero actual)
module.exports = app;