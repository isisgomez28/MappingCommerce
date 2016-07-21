"use strict";

// Definicion de Modelo para Comercio
module.exports  = function(sequelize, DataTypes) {
    var Commerce = sequelize.define ("Commerce", {
        code        : {
            type        : DataTypes.STRING(16),
            field       : 'Code',
            allowNull   : false        
        },
        name        : {
            type        : DataTypes.STRING(180),
            field       : 'Name',
            allowNull   : false
        },
        description : {
            type        : DataTypes.TEXT('tiny'),
            field       : 'Description'
        },
        latitude        : {
            type        : DataTypes.DOUBLE,
            field       : 'Latitude',
            allowNull   : false,
            defaultValue: 0,
            validate    : { min: -90, max: 90 }
        },
        longitude       : {
            type        : DataTypes.DOUBLE,
            field       : 'Longitude',
            allowNull   : false,
            defaultValue: 0,
            validate    : { min: -180, max: 180 }
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
    
    // La siguiente linea sincroniza la base de datos con el modelo.
    // Commerce.sync({force: true});
    
    return Commerce;
};