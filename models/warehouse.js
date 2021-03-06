'use strict';
module.exports = function(sequelize, DataTypes) {
  var Warehouse = sequelize.define('Warehouse', {
    name: DataTypes.STRING,
    address: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Warehouse;
};