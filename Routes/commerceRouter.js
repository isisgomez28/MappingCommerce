'use strict';

var express     = require('express');
var router      = express.Router();
var commerce    = require('../models/commerce');

/**
    Lista de Todos los Comercios.
    @author Isis Gomez
*/
router.get('/commerces', function (req, res) {
    // Mostrar en Consola resumen de la ejecucion de la peticion de todos los Comercios.
    console.log('Peticion de todos los comercios creados');
    
    commerce.findAll().then(function (err, commerces) {
        if (err) {
            return res(err);
        }
        
        try {
            parsedJson = JSON.parse(commerces);
        }
        catch (exception) {
            return res(exception);
        }
        
        return res(null, parsedJson);        
    });
});

module.exports = router;