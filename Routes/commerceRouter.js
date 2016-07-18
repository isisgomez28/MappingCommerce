var models      = require('../models/context');
var express     = require('express');
var router      = express.Router();

// Log para los models
console.log(models.Commerce);

router.use(function(req, res, next) {
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

/**
    Lista de Todos los Comercios creados
    @author Isis Gomez
*/
router.get('/commerces', function (req, res) {
    // Mostrar en Consola resumen de la ejecucion de la peticion de todos los Comercios.
    console.log('Peticion de todos los comercios creados');
    
    models.Commerce.findAll().then(function(commerces) {
        res.render('commerces', {
            title: 'Map & Commerces',
            commerces: commerces
        });       
    });
});

/**
    Creación de Comercios.
    @author Isis Gomez
*/
router.post('/create', function(req, res) {
    console.log("Creacion de un nuevo comercio."); 
    
    console.log(req.body);
    
    models.Commerce.create({
        code        : req.body.code,
        name        : req.body.name,
        description : req.body.description,
        latitude    : req.body.latitude,
        longitude   : req.body.longitude
        
    }).then(function(business) {
        res.json({message: 'Comercio Creado', business: business});
    });
});

/**
    Retorna un comercio en específico.
    @author Isis Gomez
*/
router.get('/:id', function(req, res) {
    console.log("Peticion de un comercio " + req.params.id);
    
    models.Commerce.findById(req.params.id).then(function(business) {                   
        res.json(business);
    });
});

/**
    Edición de un Comercio.
    @author Isis Gomez
*/
router.put('/edit/:id', function(req, res) {
    console.log("Edicion de comercio #" + req.params.id);
    
    models.Commerce.findById(req.params.id).then(function(business) {
        business.code           = req.body.code;
        business.name           = req.body.name;
        business.description    = req.body.description;
        business.latitude       = req.body.latitude;
        business.longitude      = req.body.longitude
        
        business.save().then(function(business) {
            res.json({message: 'Comercio Editado', business: business});
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