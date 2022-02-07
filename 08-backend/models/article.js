'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir esquema
let ArticleSchema = new Schema({
    title: String,
    content: String,
    date: { type: Date, default: Date.now },
    image: String
});

// Article es el nombre de la coleccion en la base de datos
// articles --> guarda documentos de este tipo y con estructura dentro de la coleccion
module.exports = mongoose.model('Article', ArticleSchema); 