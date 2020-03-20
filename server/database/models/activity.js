'use strict';
module.exports = (sequelize, DataTypes) => {
  var Activity = sequelize.define('Activity', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Activity.associate = function(models) {
    // associations can be defined here
  };
  return Activity;
};