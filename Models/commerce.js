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
        isPrincipal : {
            type        : DataTypes.BOOLEAN,
            field       :'Principal'
        }
    }, {
        classMethods: {
            associate : function (models) {
                Commerce.hasOne(models.Address, { as : 'place'});
            }
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
    
    //Commerce.sync({force: true});
    
    return Commerce;
};