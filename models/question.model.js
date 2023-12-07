const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define("Question", {
      question : {
        type : DataTypes.STRING,
        allowNull : false,
        
      }

    });
    return Question;
 }