'use strict';
module.exports = (sequelize, DataTypes) => {
  var Todo = sequelize.define('Todo', {
    title: DataTypes.STRING
  }, {});
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};