const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define('Student', {
    StudentName : {
        type : DataTypes.STRING,
        allowNull : false
    },
    RollNo: {
      type: DataTypes.INTEGER,
      primarykey : true,
      allowNull : false
    },
    email: {
      type: DataTypes.STRING,
      allowNull : false
    },
    
  });
  return Student;
};