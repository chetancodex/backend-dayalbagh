const { Sequelize, DataTypes } = require('sequelize');
const Option = require('../models/options.model')
module.exports = (sequelize, Sequelize) => {
    const TestAnswer = sequelize.define('TestAnswer', {
        RollNo : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        quesId : {
            type : DataTypes.STRING,
            allowNull: false
        },
        Answer : {
            type : DataTypes.BOOLEAN,
            references : {
                model : Option,
                key : 'isCorrect'
            }
        }

    });
    return Option;
}