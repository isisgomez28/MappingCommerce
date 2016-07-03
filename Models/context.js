"use strict";

var fs          = require("fs");
var Sequelize   = require("sequelize");
var path        = require("path");
var env         = process.env.NODE_ENV || "development";
var config      = require(path.join(__dirname, '..', 'config.json'))[env];
var sequelize   = new Sequelize(config);
var context     = {};

fs
    .readdirSync(__dirname)
    .filter(function(file) {
        console.log("Model file - " + file);
        return (file.indexOf(".") !== 0) && (file !== "context.js");
    })
    .forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file));
        console.log("Model created - " + model);
        context[model.name] = model;
    });

Object.keys(context).forEach(function(modelName) {
    if ("associate" in context[modelName]){
        context[modelName].associate(context);
    }
});

context.sequelize = sequelize;
context.Sequelize = Sequelize;

module.exports = context;