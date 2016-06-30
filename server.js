'use strict';

// Paquetes que necesitaremos
var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');

// Configuración de Body Parser
// Permitirá obtener data from POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Configuración del Puerto de la Aplicación
var port = process.env.PORT || 2727;

// Configuración del Router de la Aplicación
var router = express.Router();

// Prueba de Funcionamiento de Router
router.get('/', function (req, res) {
    res.json({message: 'Bienvenido a la Web API'});
});

// Registro de Nuestro Router
// Todos los routes seran prefijados con MappingCommerceAPI
app.use('/MappingCommerceAPI', router);

// Inicio de Ejecución de nuestro Servidor
app.listen(port);
console.log('Magic happens on port ' + port);