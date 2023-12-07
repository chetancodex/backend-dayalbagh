const { Sequelize, DataTypes } = require('sequelize');
const Student = require("./student.model")
const ExamDetails = require("./examdetails.model")
module.exports = (sequelize, Sequelize) => {

    const ExamResult = sequelize.define('ExamResult', {
     RollNo : {
        type : DataTypes.INTEGER,
        allowNull : false
     },
     ExamId : {
        type : DataTypes.INTEGER,
        allowNull: false
     },
     ExamScore : {
        type : DataTypes.INTEGER,
        allowNull : false
     }
    });
    return ExamResult
  
}