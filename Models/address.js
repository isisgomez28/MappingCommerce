"use strict";

// Definicion del Modelo para las Direcciones de los Comercios
module.exports  = function (sequelize, DataTypes) {    
    var Address = sequelize.define ("Address", {
        title           : {
            type        : DataTypes.STRING(60),
            field       : 'Name',
            allowNull   : false,
            set         : function (val) {
                this.setDataValue('name', val.toUpperCase());
            }
        },
        street1         : {
            type        : DataTypes.STRING(140),
            field       : 'Street1',
            allowNull   : false
        },
        street2         : {
            type        : DataTypes.STRING(140),
            field       : 'Street2',
            allowNull   : true
        },
        city            : {
            type        : DataTypes.STRING(100),
            field       : 'City',
            allowNull   : false
        },
        municipality    : {
            type        : DataTypes.STRING(100),
            field       : 'Municipality',
            allowNull   : true
        },
        country         : {
            type        : DataTypes.STRING(100),
            field       : 'Country',
            allowNull   : false
        },
        latitude        : {
            type        : DataTypes.INTEGER,
            field       : 'Latitude',
            allowNull   : true,
            defaultValue: null,
            validate    : { min: -90, max: 90 }
        },
        longitude       : {
            type        : DataTypes.INTEGER,
            field       : 'Longitude',
            allowNull   : true,
            defaultValue: null,
            validate    : { min: -180, max: 180 }
        },
    }, {
        classMethods    : {
            associate   : function(models) {
                Address.belongsTo(models.Commerce, {
                    onDelete    : "CASCADE",
                    foreignKey  : {
                        allowNull   : false
                    }
                });
            }
        }
    }, {
        freezeTableName: true
    });

    // La siguiente linea sincroniza la base de datos con el modelo.
    //Address.sync({force: true});
    
    return Address;
};