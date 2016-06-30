'use strict';

// Librerias requeridas para el modelo
var sequelize       = require('sequelize');
var path            = require("path");
var env             = process.env.NODE_ENV || "development";
var config          = require(path.join(__dirname, '..', 'config', 'config.json'))[env];

// Instancia conexion con la base de datos MySQL
var dbConnection    = new sequelize(config.database, config.username, config.password, config);

// Definicion de Modelo
var commerce    = dbConnection.define('commerce', {
    name        : {},
    code        : {},
    description : {},
    location    : {}
}, {
    
});

module.exports  = commerce;