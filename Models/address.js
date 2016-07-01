'use strict';

// Librerias requeridas para el modelo
var sequelize       = require('sequelize');
var path            = require("path");
var env             = process.env.NODE_ENV || "development";
var config          = require(path.join(__dirname, '..', 'config', 'config.json'))[env];

// Instancia conexion con la base de datos MySQL
var dbConnection    = new sequelize(config.database, config.username, config.password, config);

// Definicion del Modelo para las Direcciones de los Comercios
var address = dbConnection.define ('address', {
    name            : {
        type        : sequelize.TEXT,
        field       : 'Name',
        allowNull   : false
    },
    street1         : {
        type        : sequelize.TEXT,
        field       : 'Street1',
        allowNull   : false
    },
    street2         : {
        type        : sequelize.TEXT,
        field       : 'Street2',
        allowNull   : true
    },
    city            : {
        type        : sequelize.TEXT,
        field       : 'City',
        allowNull   : false
    },
    municipality    : {
        type        : sequelize.TEXT,
        field       : 'Municipality',
        allowNull   : true
    },
    country         : {
        type        : sequelize.TEXT,
        field       : 'Country',
        allowNull   : false
    },
    latitude        : {
        type        : Sequelize.INTEGER,
        allowNull   : true,
        defaultValue: null,
        validate    : { min: -90, max: 90 }
    },
    longitude       : {
        type        : Sequelize.INTEGER,
        allowNull   : true,
        defaultValue: null,
        validate    : { min: -180, max: 180 }
    },
}, {
    freezeTableName: true // Model tableName will be the same as the model name
});

module.exports  = address;