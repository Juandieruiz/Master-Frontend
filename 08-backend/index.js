'use strict';
// Conexion a la base de datos

// import { connect } from 'mongoose';
const mongoose = require('mongoose');   // Mongoose 
const app = require('./app');   // app.js
const port = 3900;  // Puerto en el que va a escuchar

mongoose.Promise = global.Promise;         // Configurar Mongoose a usar Promesas
mongoose.connect('mongodb://localhost:27017/api_rest_blog', {useNewUrlParser: true})    // Conectar a la base de datos
        .then(() => {                                                                 // Si se conecta
            console.log("La conexion a la base de datos se ha realizado correctamente");    // Mensaje de conexion correcta
        
            // Crear servidor y escuchar peticiones
            app.listen(port, () => {
                console.log("Servidor corriendo en http://localhost:" + port);
            });
        });