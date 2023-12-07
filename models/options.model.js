const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Option = sequelize.define('Option', {
        quesId : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        option : {
            type : DataTypes.STRING,
            allowNull: false
        },
        isCorrect : {
            type : DataTypes.BOOLEAN,
            allowNull: false
        }
    });
    return Option;
}