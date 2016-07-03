'use strict';

var express     = require('express');
var router      = express.Router();
var commerce    = require('../models/commerce');

/**
    Lista de Todos los Comercios.
    @author Isis Gomez
*/
router.get('/all', function (req, res) {
    // Mostrar en Consola resumen de la ejecucion de la peticion de todos los Comercios.
    console.log('Peticion de todos los comercios creados');
    
//    commerce.findAll().then(function (err, commerces) {
//        if (err) {
//            return res(err);
//        }
//        
//        try {
//            parsedJson = JSON.parse(commerces);
//        }
//        catch (exception) {
//            return res(exception);
//        }
//        
//        return res(null, parsedJson);        
//    });
});

router.post('/create', function(req, res) {
    console.log("Creacion de un nuevo comercio.");    
});

router.get('/:id', function(req, res) {
    console.log("Peticion de un comercio " + req.params.id);
});

router.put('/edit/:id', function(req, res) {
    console.log("Edicion de comercio #" + req.params.id);
});

router.delete('/remove/:id', function(req, res) {
    console.log("Eliminacion de comercio" + req.params.id);
});

module.exports = router;