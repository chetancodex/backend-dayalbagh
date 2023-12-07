const { Sequelize, DataTypes } = require('sequelize');
const Option = require('./options.model')
module.exports = (sequelize, Sequelize) => {
    const ExamDetails = sequelize.define('ExamDetails', {
        optionSelected : {
            type : DataTypes.INTEGER,
            allowNull : false,
            references : {
                model : Option,
                key : "id"
            }
        }
    });
    return optionSelected;
 }