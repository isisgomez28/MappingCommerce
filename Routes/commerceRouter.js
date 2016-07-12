var models      = require('../models/context');
var express     = require('express');
var router      = express.Router();

// Log para los models
console.log(models.Commerce);

/**
    Lista de Todos los Comercios creados
    @author Isis Gomez
*/
router.get('/all', function (req, res) {
    // Mostrar en Consola resumen de la ejecucion de la peticion de todos los Comercios.
    console.log('Peticion de todos los comercios creados');
    
    models.Commerce.findAll().then(function (err, commerces) {
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

/**
    Creación de Comercios.
    @author Isis Gomez
*/
router.post('/create', function(req, res) {
    console.log("Creacion de un nuevo comercio."); 
    
    console.log(req.body);
    console.log(res.body);
    
    models.Commerce.create({
        code        : req.body.code,
        name        : req.body.name,
        description : req.body.description,
        isPrincipal : req.body.isPrincipal
    }).then(function(err, business) {
        if(err) {
            return res(err);
        }
        
        try {
            parsedJson = JSON.parse(business);
        }
        catch (exception) {
            return res(exception);
        }
        
        return res(null, parsedJson);
    });
});

/**
    Retorna un comercio en específico.
    @author Isis Gomez
*/
router.get('/:id', function(req, res) {
    console.log("Peticion de un comercio " + req.params.id);
    
    models.Commerce.findById(req.params.id).then(function(err, business) {
        if(err) {
            return res(err);
        }
        
        try {
            parsedJson = JSON.parse(business);
        }
        catch (exception) {
            return res(exception);
        }
            
        return res(null, parsedJson);
    });
});

/**
    Edición de un Comercio.
    @author Isis Gomez
*/
router.put('/edit/:id', function(req, res) {
    console.log("Edicion de comercio #" + req.params.id);
    
    models.Commerce.findById(req.params.id).then(function(business) {
        business.code = req.body.code;
        business.name = req.body.name;
        business.description = req.body.description;
        business.isPrincipal = req.body.isPrincipal;
        
        business.save().then(function(err, business) {
            if(err) {
               return err; 
            }
            
            try {
                parsedJson = JSON.parse(business);
            }
            catch (exception) {
                return res(exception);
            }
            
            return res(null, parsedJson);
        });
    });
});

/**
    Eliminación de un Comercio.
    @author Isis Gomez
*/
router.delete('/remove/:id', function(req, res) {
    console.log("Eliminacion de comercio" + req.params.id);
    
    models.Commerce.findById(req.params.id).then(function(business) {
        business.destroy().then(function() {
            res.json({message : "Comercio eliminado"});
        });
    });
});

module.exports = router;