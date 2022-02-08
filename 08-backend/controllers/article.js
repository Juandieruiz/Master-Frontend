'use strict';
const validator = require('validator');
const Article = require('../models/article');

const controller = {

    datosCurso: (req, res) => {
    let hola = req.body.hola;

        return res.status(200).send({
            curso: 'Master en Frameworks Javascript',
            autor: 'Juandieruiz',
            'url': 'allmylinks.com/juandieruiz',
            hola
        });
    },   

    prueba: (req, res) => {
        return res.status(200).send({
            message: 'Hola mundo desde el controlador de articulos'
        });
    },

    save: (req, res) => {
        // Recoger parametros por post
        let params = req.body;
        console.log(params);

        // Validar datos (validator)
        try{
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);

        }catch(err){
            return res.status(200).send({
                message: 'Faltan datos por enviar'
            });
        }

        if(validate_title && validate_content){
            return res.status(200).send({
                message: 'Datos validados correctamente'
            });
            // Crear el objeto a guardar

            // Asignar valores al artículo

            // Devolver respuesta

        return res.status(200).send({
            article: params.title
        });
        }else{
            return res.status(200).send({
                message: 'Datos no validados'
            });
        }

        
    },

}; // end controller

module.exports = controller;