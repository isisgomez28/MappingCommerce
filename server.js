'use strict';

// Paquetes que necesitaremos
var debug          = require('debug');
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var models         = require('./models/context');

// Configuración del Router de la Aplicación
var commerceRoutes = require('./Routes/commerceRouter');
// Configuración del Puerto de la Aplicación
var port = process.env.PORT || 2727;

// Configuracion de los Modelos con sequelize
models.sequelize.sync().then(function () {
  debug('Express server listening on port ' + port);
});

// Configuración de Body Parser
// Permitirá obtener data from POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Registro de Nuestro Router
app.use('/commerce', commerceRoutes);

// Inicio de Ejecución de nuestro Servidor
// Configuración de los Modelos
app.listen(port);
console.log('Magic happens on port ' + port);
