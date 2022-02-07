'use strict';

// Cargar modulos de node para crear el servidor
const express = require('express'); // Servidor Express
const bodyParser = require('body-parser'); // Middleware para leer el body de los formularios

// Ejecutar express (http)
const app = express();

// Cargar ficheros rutas

// Middlewares (funciones que se ejecutan antes de llegar a las rutas)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS

// Añadir prefijos a rutas

// rutas
app.get('/datos-curso', (req, res) => {
    return res.status(200).send({
        curso: 'Master en Frameworks Javascript',
        autor: 'Juandieruiz',
        'url': 'allmylinks.com/juandieruiz'
    });
});

// Exportar modulo (fichero actual)
module.exports = app;