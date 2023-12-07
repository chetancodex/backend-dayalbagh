const { Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, Sequelize) => {
  const Teacher = sequelize.define('Teacher', {
    teacherName: {
      type: Sequelize.STRING,
      primarykey : true,
      allowNull : false
    },
    email: {
      type: Sequelize.STRING,
      allowNull : false
    },
    hash_password: {
      type: Sequelize.STRING,
      allowNull : false
    },
  });

  Teacher.prototype.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.hash_password);
  };

  return Teacher;
};