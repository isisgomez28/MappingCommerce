'use strict';

// Paquetes que necesitaremos
var debug          = require('debug');
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var models         = require('./models/context');

// Configuración de Body Parser
// Permitirá obtener data from POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Configuración del Puerto de la Aplicación
var port = process.env.PORT || 2727;

// Configuracion de los Modelos con sequelize
models.sequelize.sync().then(function () {
  debug('Express server listening on port ' + port);
});

// Configuración del Router de la Aplicación
var router = express.Router();
var commerceRoutes = require('./Routes/commerceRouter');

// Prueba de Funcionamiento de Router
router.get('/MappingCommerceAPI', function (req, res) {
    res.json({message: 'Bienvenido a la Web API'});
});

// Registro de Nuestro Router
// Todos los routes seran prefijados con MappingCommerceAPI
app.use('/MappingCommerceAPI/commerce', commerceRoutes);

// Inicio de Ejecución de nuestro Servidor
// Configuración de los Modelos
app.listen(port);
console.log('Magic happens on port ' + port);
