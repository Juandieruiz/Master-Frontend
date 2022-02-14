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
            return res.status(400).send({
                status: 'error',
                message: 'Faltan datos por enviar'
            });
        }

        if(validate_title && validate_content){
            
            // Crear el objeto a guardar
            let article = new Article();
            // Asignar valores al artículo
            article.title = params.title;
            article.content = params.content;
            article.image = null;

            //Guardar articulo
            article.save((err, articleStored) => {
            if (err || !articleStored){
                return res.status(400).send({
                    status: 'error',
                    message: 'El articulo no se ha guardado'
                });
            }else{
                // Devolver respuesta

            return res.status(200).send({
                status: 'success',
                article: articleStored
            });
            }
    });
        }else{
            return res.status(400).send({
                status: 'error',
                message: 'Datos no validados'
            });
        }
        
    },

    getArticles: (req, res) => {
        
        let finder = Article.find({});

        let dataUrl = req.params.dataUrl;

            if (dataUrl || dataUrl != undefined){
                finder.limit(5)
            }


        // Find
        finder.sort('-_id').exec((err, articles) => {
            
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los articulos'
                });
            }
            if(!articles){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos para mostrar'
                });
            }
            return res.status(200).send({
                status: 'success',
                articles
            });
        })
    },

    getArticle: (req, res) => {

        // Recoger el id de la url
        var articleId = req.params.id;

        // Comprobar que existe
        if(!articleId || articleId == null){
            return res.status(404).send({
                status: 'error',
                message: 'No existe el articulo !!!'
            });
        }

        // Buscar el articulo
        Article.findById(articleId, (err, article) => {
            
            if(err || !article){
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe el articulo !!!'
                });
            }

            // Devolverlo en json
            return res.status(200).send({
                status: 'success',
                article
            });

        });
    },

    update: (req, res) => {
        // Recoger el id del articulo por la url
        var articleId = req.params.id;

        // Recoger los datos que llegan por put
        var params = req.body;

        // Validar datos
        try{
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);
        }catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar !!!'
            }); 
        }

        if(validate_title && validate_content){
             // Find and update
             Article.findOneAndUpdate({_id: articleId}, params, {new:true}, (err, articleUpdated) => {
                if(err){
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al actualizar !!!'
                    });
                }

                if(!articleUpdated){
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe el articulo !!!'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    article: articleUpdated
                });
             });
        }else{
             // Devolver respuesta
            return res.status(200).send({
                status: 'error',
                message: 'La validación no es correcta !!!'
            });
        }
       
    },

    delete: (req, res) => {
        // Recoger el id de la url
        var articleId = req.params.id;

        // Find and delete
        Article.findOneAndDelete({_id: articleId}, (err, articleRemoved) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar !!!'
                });
            }

            if(!articleRemoved){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha borrado el articulo, posiblemente no exista !!!'
                });
            }

            return res.status(200).send({
                status: 'success',
                article: articleRemoved
            });

        }); 
    },

    

}; // end controller

module.exports = controller;