'use strict';

// Librerias requeridas para el modelo
var sequelize       = require('sequelize');
var path            = require("path");
var env             = process.env.NODE_ENV || "development";
var config          = require(path.join(__dirname, '..', 'config', 'config.json'))[env];

// Instancia conexion con la base de datos MySQL
var dbConnection    = new sequelize(config.database, config.username, config.password, config);

// Definicion de Modelo para Comercio
var commerce = dbConnection.define ('commerce', {
    code        : {
        type        : sequelize.STRING(16),
        field       : 'Code',
        allowNull   : false        
    },
    name        : {
        type        : sequelize.STRING(180),
        field       : 'Name',  // Nombre de la columna en la DB.
        allowNull   : false
    },
    description : {
        type        : sequelize.TEXT('tiny'),
        field       : 'Description'
    },
    principal   : {
        type        : sequelize.BOOLEAN,
        field       :'isPrincipal'
    }
}, {
    freezeTableName: true // Model tableName will be the same as the model name
});

module.exports  = commerce;